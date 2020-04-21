import React from 'react';
import { func, string } from 'prop-types';

import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';
import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import StyledToggleContainer from './styles';

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <StyledToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </StyledToggleContainer>
  );
};

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ToggleTheme;
