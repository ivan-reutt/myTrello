import React from 'react';
import { func, number } from 'prop-types';

import { AddColumnForm, AddColumnInput, AddColumnButton } from './styles';

class AddColumn extends React.Component {
  state = {
    title: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { idBoard, addColumn } = this.props;
    if (title.trim()) {
      addColumn(idBoard, title);
      this.setState({ title: '' });
    }
  };

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title });
  };

  render() {
    const { title } = this.state;
    return (
      <AddColumnForm onSubmit={this.handleSubmit}>
        <AddColumnInput
          type="text"
          value={title}
          placeholder="Add new column"
          onChange={this.handleChange}
        />
        <AddColumnButton type="submit" disabled={!title}>
          <i className="fas fa-plus" />
        </AddColumnButton>
      </AddColumnForm>
    );
  }
}

AddColumn.propTypes = {
  addColumn: func.isRequired,
  idBoard: number.isRequired,
};

export default AddColumn;
