import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { array, func } from 'prop-types';

import Column from 'components/Column/index';
import AddColumn from 'components/AddColumn/index';

import ColumnList from './styles';

class Board extends React.Component {
  onDragEnd = (result) => {
    const { destination, source, type } = result;
    const { columns, dndColumn, dndTaskIn, dndTaskOut } = this.props;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnList = [...columns];
      const dragColumn = { ...newColumnList[source.index] };
      newColumnList.splice(source.index, 1);
      newColumnList.splice(destination.index, 0, dragColumn);
      dndColumn(newColumnList);
    }

    if (type === 'task') {
      const dragColumn = {
        ...columns.filter((item) => item.id === +source.droppableId)[0],
      };
      const dropColumn = {
        ...columns.filter((item) => item.id === +destination.droppableId)[0],
      };
      const dropTask = { ...dragColumn.tasks[source.index] };

      if (source.droppableId === destination.droppableId) {
        const newTasks = [...dragColumn.tasks];
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, { ...dropTask });
        dndTaskIn(+source.droppableId, newTasks);
        return;
      }

      const startTasksList = [...dragColumn.tasks];
      startTasksList.splice(source.index, 1);

      const finishTasksList = [...dropColumn.tasks];
      finishTasksList.splice(destination.index, 0, { ...dropTask });

      dndTaskOut(
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
      columns,
    } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <ColumnList ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((elem, index) => (
                <Column
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
              <AddColumn addColumn={addColumn} />
            </ColumnList>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
export default Board;

Board.propTypes = {
  columns: array.isRequired,
  addColumn: func.isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
  dndColumn: func.isRequired,
  dndTaskIn: func.isRequired,
  dndTaskOut: func.isRequired,
};
