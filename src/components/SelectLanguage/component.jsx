import React from 'react';
import { func, string } from 'prop-types';

import {
  StyledSelect,
  StyledSelectWrap,
} from 'components/SelectLanguage/styles';

const SelectLanguage = ({ handleSelect, locale }) => {
  return (
    <StyledSelectWrap>
      <i className="fas fa-globe" />
      <StyledSelect onChange={handleSelect} defaultValue={locale}>
        {['en', 'ru', 'fr'].map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </StyledSelect>
    </StyledSelectWrap>
  );
};

SelectLanguage.propTypes = {
  handleSelect: func.isRequired,
  locale: string.isRequired,
};

export default SelectLanguage;
