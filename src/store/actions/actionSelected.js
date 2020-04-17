import { SELECT_BOARD } from 'constants/constants';

const selectBoard = (idBoard) => ({
  type: SELECT_BOARD,
  id: idBoard,
});

export default selectBoard;
