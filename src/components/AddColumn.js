import React from 'react';

import { AddColumnForm, AddColumnInput, AddColumnButton } from "../Styles";

class AddColumn extends React.Component {
   state = {
            title: ''
        };

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.title;
        if (title.length>2) {
            this.props.addColumn(title);
            this.setState({ title: '' });
        }
    };

    handleChange = event => {
        const title = event.target.value;
        this.setState({ title });
    };

    render() {
        const disabled = !this.state.title;
        return (
            <AddColumnForm  onSubmit={this.handleSubmit}>
                <AddColumnInput type="text"
                                value={this.state.title}
                                placeholder={"Add new column"}
                                onChange={this.handleChange}/>
                <AddColumnButton type="submit" disabled={disabled}><i className="fas fa-plus"></i></AddColumnButton>
            </AddColumnForm>
        );
    }
}

export default AddColumn;
