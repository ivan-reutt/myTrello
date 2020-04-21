import React, { useState } from 'react';
import { func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledAddColumnForm,
  StyledAddColumnInput,
  StyledAddColumnButton,
} from './styles';

const AddColumn = ({ boardId, addColumn }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim()) {
      addColumn(boardId, title);
      setTitle('');
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <StyledAddColumnForm onSubmit={handleSubmit}>
      <FormattedMessage id="addColumn" defaultMessage="Add new column">
        {(placeholder) => (
          <StyledAddColumnInput
            type="text"
            value={title}
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
      </FormattedMessage>
      <StyledAddColumnButton type="submit" disabled={!title}>
        <i className="fas fa-plus" />
      </StyledAddColumnButton>
    </StyledAddColumnForm>
  );
};

AddColumn.propTypes = {
  addColumn: func.isRequired,
  boardId: number.isRequired,
};

export default AddColumn;
