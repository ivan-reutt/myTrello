import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { array, func, number, string } from 'prop-types';

import BoardTitle from 'components/BoardTitle/index';
import Column from 'components/Column/index';
import AddColumn from 'components/AddColumn/index';

import ColumnList from './styles';

class Board extends React.Component {
  onDragEnd = (result) => {
    const { destination, source, type } = result;
    const { boards, dndColumn, dndTaskIn, dndTaskOut, idBoard } = this.props;
    const activeBoard = boards.find((item) => item.id === idBoard);
    const { columns } = activeBoard;

    if (!destination) {
      return;
    }

    if (
      +destination.droppableId === +source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnList = [...columns];
      const dragColumn = { ...newColumnList[source.index] };
      newColumnList.splice(source.index, 1);
      newColumnList.splice(destination.index, 0, dragColumn);
      dndColumn(idBoard, newColumnList);
    }

    if (type === 'task') {
      const dragColumn = columns.find(
        (item) => item.id === +source.droppableId,
      );
      const dropColumn = columns.find(
        (item) => item.id === +destination.droppableId,
      );
      const dropTask = { ...dragColumn.tasks[source.index] };

      if (+source.droppableId === +destination.droppableId) {
        const newTasks = [...dragColumn.tasks];
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, { ...dropTask });
        dndTaskIn(idBoard, +source.droppableId, newTasks);
        return;
      }

      const startTasksList = [...dragColumn.tasks];
      startTasksList.splice(source.index, 1);

      const finishTasksList = [...dropColumn.tasks];
      finishTasksList.splice(destination.index, 0, { ...dropTask });

      dndTaskOut(
        idBoard,
        +source.droppableId,
        startTasksList,
        +destination.droppableId,
        finishTasksList,
      );
    }
  };

  render() {
    const {
      addColumn,
      editColumn,
      delColumn,
      delTask,
      editTask,
      addTask,
      boards,
      idBoard,
      editBoard,
      searchText,
    } = this.props;
    const activeBoard = boards.find((item) => item.id === idBoard);
    const { columns, titleBoard } = activeBoard;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <BoardTitle
          value={titleBoard}
          editBoard={editBoard}
          idBoard={idBoard}
        />
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <ColumnList ref={provided.innerRef} {...provided.droppableProps}>
              {columns
                .filter((item) => item.title.toLowerCase().includes(searchText))
                .map((elem, index) => (
                  <Column
                    idBoard={idBoard}
                    tasks={elem.tasks}
                    id={elem.id}
                    key={elem.id}
                    title={elem.title}
                    editColumn={editColumn}
                    delColumn={delColumn}
                    addTask={addTask}
                    delTask={delTask}
                    editTask={editTask}
                    index={index}
                  />
                ))}
              {provided.placeholder}
              <AddColumn addColumn={addColumn} idBoard={idBoard} />
            </ColumnList>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

Board.propTypes = {
  boards: array.isRequired,
  searchText: string.isRequired,
  idBoard: number.isRequired,
  addColumn: func.isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
  dndColumn: func.isRequired,
  dndTaskIn: func.isRequired,
  dndTaskOut: func.isRequired,
  editBoard: func.isRequired,
};

export default Board;
