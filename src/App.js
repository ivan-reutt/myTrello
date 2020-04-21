import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store/store';
import PageContainer from 'components/Page/index';
import ToggleTheme from 'components/ToggleTheme/index';
import { IntlProvider } from 'react-intl';
import localeEn from 'assets/translations/en.json';
import localeRu from 'assets/translations/ru.json';
import localeFr from 'assets/translations/fr.json';
import SelectLanguage from 'components/SelectLanguage/component';
import GlobalStyle from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';

const data = {
  ru: localeRu,
  en: localeEn,
  fr: localeFr,
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const [locale, setLocale] = useState('en');

  const handleSelect = (event) => {
    setLocale(event.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={data[locale]}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <PageContainer />
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            <SelectLanguage handleSelect={handleSelect} locale={locale} />
            <GlobalStyle />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
