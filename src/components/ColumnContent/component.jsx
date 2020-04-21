import React from 'react';
import Task from 'components/Task';
import { arrayOf, func, number, object, shape, string } from 'prop-types';
import StyledTaskListWrap from './styles';

const ColumnContent = ({
  provided,
  delTask,
  editTask,
  boardId,
  tasks,
  columnId,
}) => {
  return (
    <StyledTaskListWrap ref={provided.innerRef} {...provided.droppableProps}>
      {tasks.map((elem, index) => (
        <Task
          boardId={boardId}
          key={elem.id}
          columnId={columnId}
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
  columnId: number.isRequired,
  boardId: number.isRequired,
  tasks: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
    }),
  ).isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  provided: object.isRequired,
};

export default ColumnContent;
