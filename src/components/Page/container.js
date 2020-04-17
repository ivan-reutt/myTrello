import { connect } from 'react-redux';

import { addBoard, delBoard } from 'store/actions/actionBoards';
import selectBoard from 'store/actions/actionSelected';
import Page from 'components/Page/component';

const mapStateToProps = (state) => ({
  boards: state.boards,
  selectedBoardId: state.selected,
});

const mapDispatchToProp = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
  delBoard: (idBoard) => dispatch(delBoard(idBoard)),
  selectBoard: (idBoard) => dispatch(selectBoard(idBoard)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Page);
