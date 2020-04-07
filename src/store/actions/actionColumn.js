import {
  ADD_COLUMN,
  DEL_COLUMN,
  EDIT_COLUMN,
  ADD_TASK,
  DEL_TASK,
  EDIT_TASK,
  DND_TASK_IN,
  DND_TASK_OUT,
  DND_COLUMN,
} from 'constants/constants';

let nextColumnId = 0;
let nextTaskId = 0;

export const addColumn = (title) => ({
  type: ADD_COLUMN,
  id: nextColumnId++,
  title,
});

export const delColumn = (id) => ({
  type: DEL_COLUMN,
  id,
});

export const editColumn = (id, title) => ({
  type: EDIT_COLUMN,
  id,
  title,
});

export const addTask = (id, taskTitle) => ({
  type: ADD_TASK,
  id,
  taskId: nextTaskId++,
  taskTitle,
});

export const delTask = (id, taskId) => ({
  type: DEL_TASK,
  id,
  taskId,
});

export const editTask = (id, taskTitle, taskId) => ({
  type: EDIT_TASK,
  id,
  taskTitle,
  taskId,
});

export const dndTaskIn = (id, tasks) => ({
  type: DND_TASK_IN,
  id,
  tasks,
});

export const dndTaskOut = (idStart, tasksStart, idFinish, tasksFinish) => ({
  type: DND_TASK_OUT,
  idStart,
  tasksStart,
  idFinish,
  tasksFinish,
});

export const dndColumn = (columnsList) => ({
  type: DND_COLUMN,
  columnsList,
});
