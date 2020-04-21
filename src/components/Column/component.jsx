import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { number, string, func, arrayOf, object } from 'prop-types';
import ColumnTitle from 'components/ColumnTitle/index';
import AddTask from 'components/AddTask/index';

import ColumnContent from 'components/ColumnContent/index';
import { StyledColumnComponent } from './styles';

const Column = ({
  idBoard,
  id,
  title,
  editColumn,
  delColumn,
  delTask,
  editTask,
  addTask,
  tasks,
  index,
}) => {
  return (
    <Draggable draggableId={`${id}column`} index={index}>
      {(provided) => (
        <StyledColumnComponent
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <ColumnTitle
            provided={provided}
            title={title}
            id={id}
            idBoard={idBoard}
            editColumn={editColumn}
            delColumn={delColumn}
          />
          <Droppable droppableId={`${id}`} type="task">
            {/* eslint-disable-next-line no-shadow */}
            {(provided) => (
              <ColumnContent
                idBoard={idBoard}
                id={id}
                delTask={delTask}
                editTask={editTask}
                provided={provided}
                tasks={tasks}
              />
            )}
          </Droppable>
          <AddTask idBoard={idBoard} id={id} addTask={addTask} />
        </StyledColumnComponent>
      )}
    </Draggable>
  );
};

Column.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  title: string.isRequired,
  index: number.isRequired,
  tasks: arrayOf(object).isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
};

export default Column;
