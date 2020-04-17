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
  idBoard: state.selected,
  searchText: ownProps.searchText,
});

const mapDispatchToProp = (dispatch) => ({
  addColumn: (idBoard, title) => dispatch(addColumn(idBoard, title)),
  delColumn: (idBoard, id) => dispatch(delColumn(idBoard, id)),
  editColumn: (idBoard, id, title) => dispatch(editColumn(idBoard, id, title)),
  addTask: (idBoard, id, taskTitle) =>
    dispatch(addTask(idBoard, id, taskTitle)),
  delTask: (idBoard, id, taskId) => dispatch(delTask(idBoard, id, taskId)),
  editTask: (idBoard, id, taskTitle, taskId) =>
    dispatch(editTask(idBoard, id, taskTitle, taskId)),
  dndTaskIn: (idBoard, id, tasks) => dispatch(dndTaskIn(idBoard, id, tasks)),
  dndTaskOut: (idBoard, idStart, tasksStart, idFinish, tasksFinish) =>
    dispatch(dndTaskOut(idBoard, idStart, tasksStart, idFinish, tasksFinish)),
  dndColumn: (idBoard, columns) => dispatch(dndColumn(idBoard, columns)),
  editBoard: (idBoard, titleBoard) => dispatch(editBoard(idBoard, titleBoard)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Board);
