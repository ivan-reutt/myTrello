import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { number, string, func } from 'prop-types';
import Calendar from 'components/Calendar/index';

import {
  StyledTaskWrap,
  StyledTaskTextarea,
  StyledTaskTitle,
  StyledTaskButtonGroup,
  StyledTaskButton,
  StyledTaskTextWrap,
} from './styles';

class Task extends React.Component {
  state = {
    isEdit: false,
    title: this.props.title,
    isShowTimer: false,
    date: new Date(),
    bgc: '#fffadf',
  };

  handleEdit = () => {
    const { boardId, editTask, columnId, taskId } = this.props;
    const { isEdit, title } = this.state;

    this.setState((prevState) => {
      return { isEdit: !prevState.isEdit };
    });

    if (isEdit) {
      editTask(boardId, columnId, title, taskId);
    }
  };

  handleChange = (event) => {
    const defaultHeightTextarea = '26px';
    const { target } = event;

    if (target.value.trim()) {
      if (event) {
        const element = target || event;

        element.style.height = defaultHeightTextarea;
        element.style.height = `${element.scrollHeight}px`;
        this.setState({ title: target.value });
      }
    }
  };

  handleKeyDown = (event) => {
    const { boardId, editTask, columnId, taskId } = this.props;
    const { title } = this.state;

    if (event.keyCode === 13) {
      this.setState({ isEdit: false });
      editTask(boardId, columnId, title, taskId);
    }
  };

  onChange = (date) => {
    const timeRemaining = date - new Date();
    const msInHour = 3600000;
    const msInDay = 86400000;
    const bgc =
      // eslint-disable-next-line no-nested-ternary
      timeRemaining < msInHour
        ? '#ff0004'
        : timeRemaining < msInDay
        ? '#ff9400'
        : '#fffadf';

    this.setState({ date, bgc });
  };

  showTimer = () => {
    const { isShowTimer } = this.state;
    this.setState({ isShowTimer: !isShowTimer });
  };

  render() {
    const { boardId, columnId, taskId, delTask, index } = this.props;
    const { isEdit, title, bgc, isShowTimer, date } = this.state;
    const symbolsInRow = 35;
    const defaultRows = Math.ceil(title.length / symbolsInRow);

    return (
      <Draggable draggableId={`${taskId}task`} index={index}>
        {(provided, snapshot) => (
          <StyledTaskWrap
            className={isEdit && 'editTask'}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            backgroundColor={bgc}
          >
            <StyledTaskTextWrap>
              {isEdit ? (
                <StyledTaskTextarea
                  defaultValue={title}
                  disabled={!isEdit}
                  rows={defaultRows}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />
              ) : (
                <StyledTaskTitle>{title}</StyledTaskTitle>
              )}
              <StyledTaskButtonGroup className={isEdit && 'edit'}>
                <StyledTaskButton type="button" onClick={this.handleEdit}>
                  <i className={`fas fa-${isEdit ? 'check' : 'edit'}`} />
                </StyledTaskButton>
                <StyledTaskButton
                  type="button"
                  onClick={() => delTask(boardId, columnId, taskId)}
                >
                  <i className="fas fa-times" />
                </StyledTaskButton>
                <StyledTaskButton type="button" onClick={this.showTimer}>
                  <i className="fas fa-hourglass-start" />
                </StyledTaskButton>
              </StyledTaskButtonGroup>
            </StyledTaskTextWrap>
            {isShowTimer && (
              <Calendar
                onChange={this.onChange}
                showTimer={this.showTimer}
                value={date}
              />
            )}
          </StyledTaskWrap>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
  columnId: number.isRequired,
  boardId: number.isRequired,
  title: string.isRequired,
  taskId: number.isRequired,
  index: number.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
};

export default Task;
