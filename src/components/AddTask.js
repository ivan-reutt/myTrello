import React from "react";

import AddTaskForm from "./AddTaskForm";

import { AddTaskWrap, AddTaskButton } from "../Styles";

export default class AddTask extends React.Component{
    state = {
            add: false
    };

    handleClick = () => {
        this.setState({add: !this.state.add})
    };

    handleBlur = () => {
        this.setState({add: false})
    };

    render() {
        const add = this.state.add;
        const { id, addTask } = this.props;
        return (
            <AddTaskWrap>
            { add ? <AddTaskForm
                    id={id}
                    addTask={addTask}
                    handleBlur={this.handleBlur}
                    handleClick={this.handleClick}
                    handleSubmit={this.handleSubmit}/>
            : <AddTaskButton onClick={this.handleClick}><i className="fas fa-plus"></i> Add new task</AddTaskButton>
            }
            </AddTaskWrap>
        )
    }
}
