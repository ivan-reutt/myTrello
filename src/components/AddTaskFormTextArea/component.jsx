import React from 'react';
import { func, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import StyledAddTaskFormTextarea from './styles';

const AddTaskFormTextarea = ({ handleKeyDown, handleChange, value }) => {
  return (
    <FormattedMessage id="addTaskPlaceholder" defaultMessage="Enter task name">
      {(placeholder) => (
        <StyledAddTaskFormTextarea
          autoFocus
          placeholder={placeholder}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      )}
    </FormattedMessage>
  );
};

AddTaskFormTextarea.propTypes = {
  handleKeyDown: func.isRequired,
  handleChange: func.isRequired,
  value: string.isRequired,
};

export default AddTaskFormTextarea;
