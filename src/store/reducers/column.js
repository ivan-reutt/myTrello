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
} from 'constants/constants';

const columns = (
  state = [],
  {
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
      return [
        ...state,
        {
          id,
          title,
          tasks: [],
        },
      ];
    case DEL_COLUMN:
      return [...state].filter((item) => item.id !== id);
    case EDIT_COLUMN:
      return [...state].map((item) => {
        if (item.id === id) {
          // eslint-disable-next-line no-param-reassign
          item.title = title;
        }
        return item;
      });
    case ADD_TASK:
      return [...state].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                id: taskId,
                title: taskTitle,
              },
            ],
          };
        }
        return item;
      });
    case DEL_TASK:
      return [...state].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tasks: [...item.tasks].filter(
              // eslint-disable-next-line no-shadow
              (item) => item.id !== taskId,
            ),
          };
        }
        return item;
      });
    case EDIT_TASK:
      return [...state].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tasks: [...item.tasks].map((task) => {
              if (task.id === taskId) {
                // eslint-disable-next-line no-param-reassign
                task.title = taskTitle;
              }
              return task;
            }),
          };
        }
        return item;
      });
    case DND_TASK_IN:
      return [...state].map((item) => {
        if (item.id === id) {
          return { ...item, tasks };
        }
        return item;
      });
    case DND_TASK_OUT:
      return [...state].map((item) => {
        if (item.id === idStart) {
          return { ...item, tasks: [...tasksStart] };
        }
        if (item.id === idFinish) {
          return { ...item, tasks: [...tasksFinish] };
        }
        return item;
      });
    case DND_COLUMN:
      return [...columnsList];
    default:
      return state;
  }
};

export default columns;
