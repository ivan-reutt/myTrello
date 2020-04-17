import {
  ADD_COLUMN,
  EDIT_COLUMN,
  DEL_COLUMN,
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

const boards = (
  state = [],
  {
    idBoard,
    titleBoard,
    id,
    title,
    type,
    taskId,
    taskTitle,
    tasks,
    idStart,
    tasksStart,
    idFinish,
    tasksFinish,
    columnsList,
  },
) => {
  switch (type) {
    case ADD_COLUMN:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns, { id, title, tasks: [] }],
          };
        }
        return item;
      });
    case DEL_COLUMN:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].filter((elem) => elem.id !== id),
          };
        }
        return item;
      });
    case EDIT_COLUMN:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === id) {
                // eslint-disable-next-line no-param-reassign
                elem.title = title;
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case ADD_TASK:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === id) {
                return {
                  ...elem,
                  tasks: [
                    ...elem.tasks,
                    {
                      id: taskId,
                      title: taskTitle,
                    },
                  ],
                };
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case DEL_TASK:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === id) {
                return {
                  ...elem,
                  tasks: [...elem.tasks].filter(
                    // eslint-disable-next-line no-shadow
                    (el) => el.id !== taskId,
                  ),
                };
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case EDIT_TASK:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === id) {
                return {
                  ...elem,
                  tasks: [...elem.tasks].map((task) => {
                    if (task.id === taskId) {
                      // eslint-disable-next-line no-param-reassign
                      task.title = taskTitle;
                    }
                    return task;
                  }),
                };
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case DND_TASK_IN:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === id) {
                return { ...elem, tasks };
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case DND_TASK_OUT:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...item.columns].map((elem) => {
              if (elem.id === idStart) {
                return { ...elem, tasks: [...tasksStart] };
              }
              if (elem.id === idFinish) {
                return { ...elem, tasks: [...tasksFinish] };
              }
              return elem;
            }),
          };
        }
        return item;
      });
    case DND_COLUMN:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return {
            ...item,
            columns: [...columnsList],
          };
        }
        return item;
      });
    case ADD_BOARD:
      return [
        ...state,
        {
          id: idBoard,
          titleBoard,
          columns: [],
        },
      ];
    case EDIT_BOARD:
      return [...state].map((item) => {
        if (item.id === idBoard) {
          return { ...item, titleBoard };
        }
        return item;
      });
    case DEL_BOARD:
      return [...state].filter((item) => item.id !== idBoard);
    default:
      return state;
  }
};

export default boards;
