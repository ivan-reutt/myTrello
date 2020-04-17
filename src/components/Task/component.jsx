import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { number, string, func } from 'prop-types';
import DateTimePicker from 'react-datetime-picker';

import {
  TaskWrap,
  TaskTextarea,
  TaskTitle,
  TaskButtonGroup,
  TaskButton,
  TaskTextWrap,
  TimePickerWrap,
  TimePicker,
  TimePickerButton,
} from './styles';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      edit: false,
      title,
      showTimer: false,
      date: new Date(),
      bgc: '#fffadf',
    };
  }

  handleEdit = () => {
    const { idBoard, editTask, id, taskId } = this.props;
    const { edit, title } = this.state;
    this.setState({ edit: !edit });
    if (edit) {
      editTask(idBoard, id, title, taskId);
    }
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
    const { idBoard, editTask, id, taskId } = this.props;
    const { title } = this.state;
    if (event.keyCode === 13) {
      this.setState({ edit: false });
      editTask(idBoard, id, title, taskId);
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
    const { showTimer } = this.state;
    this.setState({ showTimer: !showTimer });
  };

  render() {
    const { idBoard, id, taskId, delTask, index } = this.props;
    const { edit, title, bgc, showTimer, date } = this.state;
    const defaultRows = Math.ceil(title.length / 35);

    return (
      <Draggable draggableId={`${taskId}task`} index={index}>
        {(provided, snapshot) => (
          <TaskWrap
            className={edit ? 'editTask' : ''}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            backgroundColor={bgc}
          >
            <TaskTextWrap>
              {!edit ? (
                <TaskTitle>{title}</TaskTitle>
              ) : (
                <TaskTextarea
                  defaultValue={title}
                  disabled={!edit}
                  rows={defaultRows}
                  onChange={(event) => this.handleChange(event, '26px')}
                  onKeyDown={(event) => this.handleKeyDown(event)}
                />
              )}
              <TaskButtonGroup className={edit ? 'edit' : ''}>
                <TaskButton type="button" onClick={this.handleEdit}>
                  <i className={!edit ? 'fas fa-edit' : 'fas fa-check'} />
                </TaskButton>
                <TaskButton
                  type="button"
                  onClick={() => delTask(idBoard, id, taskId)}
                >
                  <i className="fas fa-times" />
                </TaskButton>
                <TaskButton type="button" onClick={this.showTimer}>
                  <i className="fas fa-hourglass-start" />
                </TaskButton>
              </TaskButtonGroup>
            </TaskTextWrap>
            {showTimer ? (
              <TimePickerWrap>
                <TimePicker>
                  <DateTimePicker
                    onChange={this.onChange}
                    value={date}
                    disableClock
                    clearIcon={null}
                    showLeadingZeros
                  />
                  <TimePickerButton type="button" onClick={this.showTimer}>
                    Apply
                  </TimePickerButton>
                </TimePicker>
              </TimePickerWrap>
            ) : (
              ''
            )}
          </TaskWrap>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  title: string.isRequired,
  taskId: number.isRequired,
  index: number.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
};

export default Task;
