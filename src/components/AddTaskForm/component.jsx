import React from 'react';
import { func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledAddTaskFormWrap,
  StyledAddTaskFormTextarea,
  StyledAddTaskFormButton,
} from './styles';

class AddTaskForm extends React.Component {
  state = {
    title: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTask, idBoard, id } = this.props;
    const { title } = this.state;

    if (title.trim()) {
      addTask(idBoard, id, title);
    }
    this.setState({ title: '' });
  };

  handleChange = (element) => {
    const defaultHeightTextarea = '50px';
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeightTextarea;
      target.style.height = `${target.scrollHeight}px`;

      this.setState({ title: element.target.value });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') this.handleSubmit(event);
  };

  render() {
    const { title } = this.state;
    const { handleClick } = this.props;
    return (
      <StyledAddTaskFormWrap onSubmit={this.handleSubmit}>
        <FormattedMessage
          id="addTaskPlaceholder"
          defaultMessage="Enter task name"
        >
          {(placeholder) => (
            <StyledAddTaskFormTextarea
              autoFocus
              placeholder={placeholder}
              value={title}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
            />
          )}
        </FormattedMessage>
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
  }
}

AddTaskForm.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  addTask: func.isRequired,
  handleClick: func.isRequired,
};

export default AddTaskForm;
