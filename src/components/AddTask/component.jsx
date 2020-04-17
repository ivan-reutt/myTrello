import React from 'react';
import { func, number } from 'prop-types';

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
    const { idBoard, id, addTask } = this.props;
    return (
      <AddTaskWrap>
        {add ? (
          <AddTaskForm
            idBoard={idBoard}
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

AddTask.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  addTask: func.isRequired,
};

export default AddTask;
