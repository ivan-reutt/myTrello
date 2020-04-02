import React from "react";
import { Draggable } from 'react-beautiful-dnd';

import { TaskWrap, TaskTextarea, TaskTitle, TaskButtonGroup, TaskButton} from "../Styles";

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            edit: false,
            title: this.props.title
        }
    }

    handleEdit = () => {
        this.setState({edit: !this.state.edit})
        if(this.state.edit) {
            this.props.editTask(this.props.id, this.state.title, this.props.taskId)
        }
    };

    handleChange = (element, defaultHeight)=> {
        if(element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight}px`;
            this.setState({title: element.target.value})
        }
    };

    handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            this.setState({edit: false});
            this.props.editTask(this.props.id, this.state.title, this.props.taskId)
        }
    };

    render() {
        const { id, taskId, delTask, index } = this.props;
        const { edit, title } = this.state;
        const defaultRows = Math.ceil(title.length/35);
        return (
            <Draggable draggableId={`${taskId}task`} index={index}>
                {(provided, snapshot) => (
                    <TaskWrap className={edit ? 'editTask' : ''}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              isDragging={snapshot.isDragging}>
                        {!edit ? (
                            <TaskTitle>{title}</TaskTitle>
                        ) : (
                            <TaskTextarea defaultValue={title}
                                          disabled={!edit}
                                          rows={defaultRows}
                                          onChange={(event)=> this.handleChange(event, '26px')}
                                          onKeyDown={(event) => this.handleKeyDown(event)}/>
                        )}
                        <TaskButtonGroup className={edit ? 'edit' : ''}>
                            <TaskButton type={'button'}
                                    onClick={this.handleEdit}><i className={!edit ? 'fas fa-edit' : 'fas fa-check'}></i>
                            </TaskButton>
                            <TaskButton type={'button'}
                                    onClick={() => delTask(id, taskId)}><i className="fas fa-times"></i></TaskButton>
                        </TaskButtonGroup>
                    </TaskWrap>
                )}
            </Draggable>
        )
    }
}

export default Task;
