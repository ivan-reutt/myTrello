import React, { useState } from 'react';
import { func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import AddTaskForm from 'components/AddTaskForm/index';

import { StyledAddTaskWrap, StyledAddTaskButton } from './styles';

const AddTask = ({ boardId, columnId, addTask }) => {
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const handleClick = () => {
    setIsShowAddForm(!isShowAddForm);
  };

  const handleBlur = () => {
    setIsShowAddForm(false);
  };

  return (
    <StyledAddTaskWrap>
      {isShowAddForm ? (
        <AddTaskForm
          boardId={boardId}
          columnId={columnId}
          addTask={addTask}
          handleBlur={handleBlur}
          handleClick={handleClick}
        />
      ) : (
        <StyledAddTaskButton onClick={handleClick}>
          <i className="fas fa-plus" />
          <FormattedMessage id="addTask" defaultMessage=" Add new task" />
        </StyledAddTaskButton>
      )}
    </StyledAddTaskWrap>
  );
};

AddTask.propTypes = {
  columnId: number.isRequired,
  boardId: number.isRequired,
  addTask: func.isRequired,
};

export default AddTask;
