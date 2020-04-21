import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { arrayOf, func, number, string, shape } from 'prop-types';

import BoardTitle from 'components/BoardTitle/index';
import BoardContent from 'components/BoardContent/index';

class Board extends React.PureComponent {
  onDragEnd = (result) => {
    const { destination, source, type } = result;
    const { boards, dndColumn, dndTaskIn, dndTaskOut, boardId } = this.props;
    const activeBoard = boards.find((item) => item.id === boardId);
    const { columns } = activeBoard;

    if (!destination) {
      return;
    }

    if (
      parseInt(destination.droppableId, 10) ===
        parseInt(source.droppableId, 10) &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnList = [...columns];
      const dragColumn = { ...newColumnList[source.index] };

      newColumnList.splice(source.index, 1);
      newColumnList.splice(destination.index, 0, dragColumn);

      dndColumn(boardId, newColumnList);
    }

    if (type === 'task') {
      const dragColumn = columns.find(
        (item) => item.id === parseInt(source.droppableId, 10),
      );
      const dropColumn = columns.find(
        (item) => item.id === parseInt(destination.droppableId, 10),
      );
      const dropTask = { ...dragColumn.tasks[source.index] };

      if (
        parseInt(source.droppableId, 10) ===
        parseInt(destination.droppableId, 10)
      ) {
        const newTasks = [...dragColumn.tasks];

        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, { ...dropTask });

        dndTaskIn(boardId, parseInt(source.droppableId, 10), newTasks);
        return;
      }

      const startTasksList = [...dragColumn.tasks];
      startTasksList.splice(source.index, 1);

      const finishTasksList = [...dropColumn.tasks];
      finishTasksList.splice(destination.index, 0, { ...dropTask });

      dndTaskOut(
        boardId,
        parseInt(source.droppableId, 10),
        startTasksList,
        parseInt(destination.droppableId, 10),
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
      boardId,
      editBoard,
      searchText,
    } = this.props;
    const activeBoard = boards.find((item) => item.id === boardId);
    const { columns, titleBoard } = activeBoard;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <BoardTitle
          value={titleBoard}
          editBoard={editBoard}
          boardId={boardId}
        />
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <BoardContent
              searchText={searchText}
              addColumn={addColumn}
              editColumn={editColumn}
              delColumn={delColumn}
              delTask={delTask}
              editTask={editTask}
              addTask={addTask}
              provided={provided}
              columns={columns}
              boardId={boardId}
            />
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

Board.propTypes = {
  boards: arrayOf(
    shape({
      id: number.isRequired,
      titleBoard: string.isRequired,
      columns: arrayOf(
        shape({
          id: number.isRequired,
          title: string.isRequired,
          tasks: arrayOf(
            shape({
              id: number.isRequired,
              title: string.isRequired,
            }),
          ),
        }),
      ),
    }),
  ).isRequired,
  searchText: string.isRequired,
  boardId: number.isRequired,
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
