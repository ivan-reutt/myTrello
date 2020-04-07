import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store/store';
import BoardContainer from 'components/Board/index';
import ToggleTheme from 'components/ToggleTheme/index';
import GlobalStyle from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Provider store={store}>
        <BoardContainer />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
