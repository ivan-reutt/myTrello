import React from 'react';
import { func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledAddColumnForm,
  StyledAddColumnInput,
  StyledAddColumnButton,
} from './styles';

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
      <StyledAddColumnForm onSubmit={this.handleSubmit}>
        <FormattedMessage id="addColumn" defaultMessage="Add new column">
          {(placeholder) => (
            <StyledAddColumnInput
              type="text"
              value={title}
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          )}
        </FormattedMessage>

        <StyledAddColumnButton type="submit" disabled={!title}>
          <i className="fas fa-plus" />
        </StyledAddColumnButton>
      </StyledAddColumnForm>
    );
  }
}

AddColumn.propTypes = {
  addColumn: func.isRequired,
  idBoard: number.isRequired,
};

export default AddColumn;
