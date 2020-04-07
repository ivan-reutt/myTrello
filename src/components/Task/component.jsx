import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { number, string, func } from 'prop-types';

import {
  TaskWrap,
  TaskTextarea,
  TaskTitle,
  TaskButtonGroup,
  TaskButton,
} from './styles';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      edit: false,
      title,
    };
  }

  handleEdit = () => {
    const { editTask, id, taskId } = this.props;
    const { edit, title } = this.state;
    this.setState({ edit: !edit });
    if (edit) {
      editTask(id, title, taskId);
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
    const { editTask, id, taskId } = this.props;
    const { title } = this.state;
    if (event.keyCode === 13) {
      this.setState({ edit: false });
      editTask(id, title, taskId);
    }
  };

  render() {
    const { id, taskId, delTask, index } = this.props;
    const { edit, title } = this.state;
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
          >
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
              <TaskButton type="button" onClick={() => delTask(id, taskId)}>
                <i className="fas fa-times" />
              </TaskButton>
            </TaskButtonGroup>
          </TaskWrap>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  taskId: number.isRequired,
  index: number.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
};

export default Task;
