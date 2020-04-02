import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import BoardContainer from "./containers/BoardContainer";

import { GlobalStyle } from "./Styles";


function App() {
  return (
        <Provider store={store}>
          <BoardContainer/>
          <GlobalStyle/>
        </Provider>
  );
}

export default App;
