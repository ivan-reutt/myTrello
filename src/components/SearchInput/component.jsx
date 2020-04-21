import React from 'react';
import { func } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import StyledSearchInput from './styles';

const SearchInput = ({ changeSearchInput }) => {
  return (
    <FormattedMessage id="search" defaultMessage="Search...">
      {(placeholder) => (
        <StyledSearchInput
          type="text"
          onChange={changeSearchInput}
          placeholder={placeholder}
        />
      )}
    </FormattedMessage>
  );
};

SearchInput.propTypes = {
  changeSearchInput: func.isRequired,
};

export default SearchInput;
