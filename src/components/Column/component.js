import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { number, string, array, func } from 'prop-types';
import ColumnTitle from 'components/ColumnTitle/index';
import Task from 'components/Task/index';
import AddTask from 'components/AddTask/index';

import { ColumnComponent, TaskListWrap } from './styles';

const Column = (props) => {
  const {
    id,
    title,
    editColumn,
    delColumn,
    delTask,
    editTask,
    addTask,
    tasks,
    index,
  } = props;
  return (
    <Draggable draggableId={`${id}column`} index={index}>
      {(provided) => (
        <ColumnComponent ref={provided.innerRef} {...provided.draggableProps}>
          <ColumnTitle
            provided={provided}
            title={title}
            id={id}
            editColumn={editColumn}
            delColumn={delColumn}
          />
          <Droppable droppableId={`${id}`} type="task">
            {/* eslint-disable-next-line no-shadow */}
            {(provided) => (
              <TaskListWrap
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {/* eslint-disable-next-line no-shadow */}
                {tasks.map((elem, index) => (
                  <Task
                    key={elem.id}
                    id={id}
                    taskId={elem.id}
                    delTask={delTask}
                    editTask={editTask}
                    title={elem.title}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </TaskListWrap>
            )}
          </Droppable>
          <AddTask id={id} addTask={addTask} />
        </ColumnComponent>
      )}
    </Draggable>
  );
};

export default Column;

Column.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  index: number.isRequired,
  tasks: array.isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
};
