import { combineReducers } from 'redux';

import boards from 'store/reducers/boards';
import selected from 'store/reducers/selected';

export default combineReducers({
  boards,
  selected,
});
