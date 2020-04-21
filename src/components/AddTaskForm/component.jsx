import React, { useState } from 'react';
import { func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import AddTaskFormTextarea from 'components/AddTaskFormTextArea/index';
import { StyledAddTaskFormWrap, StyledAddTaskFormButton } from './styles';

const AddTaskForm = ({ addTask, boardId, columnId, handleClick }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      addTask(boardId, columnId, title);
    }
    setTitle('');
  };

  const handleChange = (event) => {
    const defaultHeightTextarea = '50px';
    const { target } = event;

    if (target.value.trim()) {
      if (event) {
        const element = target || event;

        element.style.height = defaultHeightTextarea;
        element.style.height = `${element.scrollHeight}px`;
        setTitle(target.value);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSubmit(event);
  };

  return (
    <StyledAddTaskFormWrap onSubmit={handleSubmit}>
      <AddTaskFormTextarea
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
        value={title}
      />
      <StyledAddTaskFormButton type="submit">
        <i className="fas fa-plus" />
        <FormattedMessage id="addTaskForm" defaultMessage="Add task" />
      </StyledAddTaskFormButton>
      <StyledAddTaskFormButton type="button" onClick={handleClick}>
        <i className="fas fa-times" />
        <FormattedMessage id="addTaskFormCancel" defaultMessage="Cancel" />
      </StyledAddTaskFormButton>
    </StyledAddTaskFormWrap>
  );
};

AddTaskForm.propTypes = {
  columnId: number.isRequired,
  boardId: number.isRequired,
  addTask: func.isRequired,
  handleClick: func.isRequired,
};

export default AddTaskForm;
