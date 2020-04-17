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
  ADD_BOARD,
  EDIT_BOARD,
  DEL_BOARD,
} from 'constants/constants';

export const addColumn = (idBoard, title) => ({
  type: ADD_COLUMN,
  idBoard,
  id: new Date().getTime(),
  title,
});

export const delColumn = (idBoard, id) => ({
  type: DEL_COLUMN,
  idBoard,
  id,
});

export const editColumn = (idBoard, id, title) => ({
  type: EDIT_COLUMN,
  idBoard,
  id,
  title,
});

export const addTask = (idBoard, id, taskTitle) => ({
  type: ADD_TASK,
  idBoard,
  id,
  taskId: new Date().getTime(),
  taskTitle,
});

export const delTask = (idBoard, id, taskId) => ({
  type: DEL_TASK,
  idBoard,
  id,
  taskId,
});

export const editTask = (idBoard, id, taskTitle, taskId) => ({
  type: EDIT_TASK,
  idBoard,
  id,
  taskTitle,
  taskId,
});

export const dndTaskIn = (idBoard, id, tasks) => ({
  type: DND_TASK_IN,
  idBoard,
  id,
  tasks,
});

export const dndTaskOut = (
  idBoard,
  idStart,
  tasksStart,
  idFinish,
  tasksFinish,
) => ({
  type: DND_TASK_OUT,
  idBoard,
  idStart,
  tasksStart,
  idFinish,
  tasksFinish,
});

export const dndColumn = (idBoard, columnsList) => ({
  type: DND_COLUMN,
  idBoard,
  columnsList,
});

export const addBoard = (titleBoard) => ({
  type: ADD_BOARD,
  titleBoard,
  idBoard: new Date().getTime(),
});

export const editBoard = (idBoard, titleBoard) => ({
  type: EDIT_BOARD,
  titleBoard,
  idBoard,
});

export const delBoard = (idBoard) => ({
  type: DEL_BOARD,
  idBoard,
});
