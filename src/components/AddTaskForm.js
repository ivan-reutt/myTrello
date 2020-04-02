import React from "react";

import { AddTaskFormWrap, AddTaskFormTextarea, AddTaskFormButton} from "../Styles";

class AddTaskForm extends React.Component {
    state = {
        title: ''
    };

    handleSubmit =(e) => {
        e.preventDefault();
        if(this.state.title.length>3) {
            this.props.addTask(this.props.id, this.state.title)
        }
        this.setState({title: ''})
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
        if(event.keyCode === 13) this.handleSubmit(event);
    };

    render() {
        return (
            <AddTaskFormWrap onSubmit={this.handleSubmit}>
                <AddTaskFormTextarea autoFocus={true}
                                     placeholder={'Enter task name'}
                                     value={this.state.title}
                                     onKeyDown={this.handleKeyDown}
                                     onChange={(event) => this.handleChange(event, '50px')}/>
                <AddTaskFormButton type={'submit'}><i className={'fas fa-plus'}></i> Add task</AddTaskFormButton>
                <AddTaskFormButton type={'button'}
                                   onClick={this.props.handleClick}><i className="fas fa-times"></i> Cancel</AddTaskFormButton>
            </AddTaskFormWrap>
        )
    }
}

export default AddTaskForm;
