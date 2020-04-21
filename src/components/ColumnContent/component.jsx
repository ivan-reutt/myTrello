import React from 'react';
import Task from 'components/Task';
import { arrayOf, func, number, object } from 'prop-types';
import StyledTaskListWrap from './styles';

const ColumnContent = ({ provided, delTask, editTask, idBoard, tasks, id }) => {
  return (
    <StyledTaskListWrap ref={provided.innerRef} {...provided.droppableProps}>
      {/* eslint-disable-next-line no-shadow */}
      {tasks.map((elem, index) => (
        <Task
          idBoard={idBoard}
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
    </StyledTaskListWrap>
  );
};

ColumnContent.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  tasks: arrayOf(object).isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  provided: object.isRequired,
};

export default ColumnContent;
