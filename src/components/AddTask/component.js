import React from 'react';
import { number, func } from 'prop-types';

import AddTaskForm from 'components/AddTaskForm/index';

import { AddTaskWrap, AddTaskButton } from './styles';

class AddTask extends React.Component {
  state = {
    add: false,
  };

  handleClick = () => {
    const { add } = this.state;
    this.setState({ add: !add });
  };

  handleBlur = () => {
    this.setState({ add: false });
  };

  render() {
    const { add } = this.state;
    const { id, addTask } = this.props;
    return (
      <AddTaskWrap>
        {add ? (
          <AddTaskForm
            id={id}
            addTask={addTask}
            handleBlur={this.handleBlur}
            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <AddTaskButton onClick={this.handleClick}>
            <i className="fas fa-plus" /> Add new task
          </AddTaskButton>
        )}
      </AddTaskWrap>
    );
  }
}

export default AddTask;

AddTask.propTypes = {
  id: number.isRequired,
  addTask: func.isRequired,
};
