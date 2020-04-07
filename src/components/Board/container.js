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
} from 'store/actions/actionColumn';
import Board from 'components/Board/component';

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProp = (dispatch) => ({
  addColumn: (title) => dispatch(addColumn(title)),
  delColumn: (id) => dispatch(delColumn(id)),
  editColumn: (id, title) => dispatch(editColumn(id, title)),
  addTask: (id, taskTitle) => dispatch(addTask(id, taskTitle)),
  delTask: (id, taskId) => dispatch(delTask(id, taskId)),
  editTask: (id, taskTitle, taskId) =>
    dispatch(editTask(id, taskTitle, taskId)),
  dndTaskIn: (id, tasks) => dispatch(dndTaskIn(id, tasks)),
  dndTaskOut: (idStart, tasksStart, idFinish, tasksFinish) =>
    dispatch(dndTaskOut(idStart, tasksStart, idFinish, tasksFinish)),
  dndColumn: (columns) => dispatch(dndColumn(columns)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Board);
