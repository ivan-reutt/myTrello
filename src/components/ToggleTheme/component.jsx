import React from 'react';
import { func, string } from 'prop-types';

import { ReactComponent as MoonIcon } from 'icons/moon.svg';
import { ReactComponent as SunIcon } from 'icons/sun.svg';
import ToggleContainer from './styles';

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ToggleTheme;
