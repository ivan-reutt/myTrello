import React from 'react';
import { func, string } from 'prop-types';

import { RU, EN, FR } from 'constants/constants';

import {
  StyledSelect,
  StyledSelectWrap,
} from 'components/SelectLanguage/styles';

const languages = [RU, EN, FR];

const SelectLanguage = ({ handleSelect, locale }) => {
  return (
    <StyledSelectWrap>
      <i className="fas fa-globe" />
      <StyledSelect onChange={handleSelect} defaultValue={locale}>
        {languages.map((loc) => (
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
