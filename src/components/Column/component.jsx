import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { number, string, func, arrayOf, shape } from 'prop-types';
import ColumnTitle from 'components/ColumnTitle/index';
import AddTask from 'components/AddTask/index';

import ColumnContent from 'components/ColumnContent/index';
import { StyledColumnComponent } from './styles';

const Column = ({
  boardId,
  columnId,
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
    <Draggable draggableId={`${columnId}column`} index={index}>
      {(provided) => (
        <StyledColumnComponent
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <ColumnTitle
            provided={provided}
            title={title}
            columnId={columnId}
            boardId={boardId}
            editColumn={editColumn}
            delColumn={delColumn}
          />
          <Droppable droppableId={`${columnId}`} type="task">
            {(providedContent) => (
              <ColumnContent
                boardId={boardId}
                columnId={columnId}
                delTask={delTask}
                editTask={editTask}
                provided={providedContent}
                tasks={tasks}
              />
            )}
          </Droppable>
          <AddTask boardId={boardId} columnId={columnId} addTask={addTask} />
        </StyledColumnComponent>
      )}
    </Draggable>
  );
};

Column.propTypes = {
  columnId: number.isRequired,
  boardId: number.isRequired,
  title: string.isRequired,
  index: number.isRequired,
  tasks: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
    }),
  ).isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
};

export default Column;
