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

export const addBoard = (titleBoard) => ({
  type: ADD_BOARD,
  titleBoard,
  boardId: new Date().getTime(),
});

export const editBoard = (boardId, titleBoard) => ({
  type: EDIT_BOARD,
  titleBoard,
  boardId,
});

export const delBoard = (boardId) => ({
  type: DEL_BOARD,
  boardId,
});

export const addColumn = (boardId, title) => ({
  type: ADD_COLUMN,
  boardId,
  columnId: new Date().getTime(),
  title,
});

export const delColumn = (boardId, columnId) => ({
  type: DEL_COLUMN,
  boardId,
  columnId,
});

export const editColumn = (boardId, columnId, title) => ({
  type: EDIT_COLUMN,
  boardId,
  columnId,
  title,
});

export const addTask = (boardId, columnId, taskTitle) => ({
  type: ADD_TASK,
  boardId,
  columnId,
  taskId: new Date().getTime(),
  taskTitle,
});

export const delTask = (boardId, columnId, taskId) => ({
  type: DEL_TASK,
  boardId,
  columnId,
  taskId,
});

export const editTask = (boardId, columnId, taskTitle, taskId) => ({
  type: EDIT_TASK,
  boardId,
  columnId,
  taskTitle,
  taskId,
});

export const dndTaskIn = (boardId, columnId, tasks) => ({
  type: DND_TASK_IN,
  boardId,
  columnId,
  tasks,
});

export const dndTaskOut = (
  boardId,
  idStart,
  tasksStart,
  idFinish,
  tasksFinish,
) => ({
  type: DND_TASK_OUT,
  boardId,
  idStart,
  tasksStart,
  idFinish,
  tasksFinish,
});

export const dndColumn = (boardId, columnsList) => ({
  type: DND_COLUMN,
  boardId,
  columnsList,
});
