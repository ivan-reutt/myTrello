import { connect } from 'react-redux';

import {
  addColumn,
  addTask,
  delColumn,
  delTask,
  editColumn,
  editTask,
  dndTaskIn,
  dndTaskOut,
  dndColumn,
  editBoard,
} from 'store/actions/actionBoards';
import Board from 'components/Board/component';

const mapStateToProps = (state, ownProps) => ({
  boards: state.boards,
  boardId: state.selected,
  searchText: ownProps.searchText,
});

const mapDispatchToProp = (dispatch) => ({
  addColumn: (boardId, title) => dispatch(addColumn(boardId, title)),
  delColumn: (boardId, columnId) => dispatch(delColumn(boardId, columnId)),
  editColumn: (boardId, columnId, title) =>
    dispatch(editColumn(boardId, columnId, title)),
  addTask: (boardId, columnId, taskTitle) =>
    dispatch(addTask(boardId, columnId, taskTitle)),
  delTask: (boardId, columnId, taskId) =>
    dispatch(delTask(boardId, columnId, taskId)),
  editTask: (boardId, columnId, taskTitle, taskId) =>
    dispatch(editTask(boardId, columnId, taskTitle, taskId)),
  dndTaskIn: (boardId, columnId, tasks) =>
    dispatch(dndTaskIn(boardId, columnId, tasks)),
  dndTaskOut: (boardId, idStart, tasksStart, idFinish, tasksFinish) =>
    dispatch(dndTaskOut(boardId, idStart, tasksStart, idFinish, tasksFinish)),
  dndColumn: (boardId, columns) => dispatch(dndColumn(boardId, columns)),
  editBoard: (boardId, titleBoard) => dispatch(editBoard(boardId, titleBoard)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Board);
