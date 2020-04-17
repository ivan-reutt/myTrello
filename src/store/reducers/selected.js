import { SELECT_BOARD } from 'constants/constants';

const selected = (state = null, { id, type }) => {
  switch (type) {
    case SELECT_BOARD:
      return id;
    default:
      return state;
  }
};

export default selected;
