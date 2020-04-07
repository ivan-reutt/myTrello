import React from 'react';
import { number, func } from 'prop-types';

import {
  AddTaskFormWrap,
  AddTaskFormTextarea,
  AddTaskFormButton,
} from './styles';

class AddTaskForm extends React.Component {
  state = {
    title: '',
  };

  handleSubmit = (e) => {
    const { addTask, id } = this.props;
    const { title } = this.state;
    e.preventDefault();
    if (title.length > 3) {
      addTask(id, title);
    }
    this.setState({ title: '' });
  };

  handleChange = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
      this.setState({ title: element.target.value });
    }
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) this.handleSubmit(event);
  };

  render() {
    const { title } = this.state;
    const { handleClick } = this.props;
    return (
      <AddTaskFormWrap onSubmit={this.handleSubmit}>
        <AddTaskFormTextarea
          autoFocus
          placeholder="Enter task name"
          value={title}
          onKeyDown={this.handleKeyDown}
          onChange={(event) => this.handleChange(event, '50px')}
        />
        <AddTaskFormButton type="submit">
          <i className="fas fa-plus" /> Add task
        </AddTaskFormButton>
        <AddTaskFormButton type="button" onClick={handleClick}>
          <i className="fas fa-times" /> Cancel
        </AddTaskFormButton>
      </AddTaskFormWrap>
    );
  }
}

AddTaskForm.propTypes = {
  id: number.isRequired,
  addTask: func.isRequired,
  handleClick: func.isRequired,
};

export default AddTaskForm;
