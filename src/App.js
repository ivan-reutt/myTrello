import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store/store';
import PageContainer from 'components/Page/index';
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
        <PersistGate loading={null} persistor={persistor}>
          <PageContainer />
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
