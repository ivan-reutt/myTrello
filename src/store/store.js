import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import combineReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
