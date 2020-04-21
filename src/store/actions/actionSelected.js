import { SELECT_BOARD } from 'constants/constants';

const selectBoard = (boardId) => ({
  type: SELECT_BOARD,
  id: boardId,
});

export default selectBoard;
