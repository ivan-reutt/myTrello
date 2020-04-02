import {ADD_COLUMN, EDIT_COLUMN, DEL_COLUMN, ADD_TASK, DEL_TASK, EDIT_TASK, DND_TASK_IN, DND_TASK_OUT, DND_COLUMN } from "../constants/actions";

const columns = (state = [], { id, title, type, taskId, taskTitle, tasks, idStart, tasksStart, idFinish, tasksFinish, columns}) => {
    switch(type) {
        case ADD_COLUMN:
            return [
                ...state, {
                    id,
                    title,
                    tasks: []
                }
            ]
        case DEL_COLUMN:
            return [...state].filter(item => item.id !== id);
        case EDIT_COLUMN:
            return [...state].map(item => {
                if (item.id === id) {
                    item.title = title
                }
                return item
            });
        case ADD_TASK:
            return [...state].map(item => {
                if(item.id === id) {
                    return {...item, tasks: [...item.tasks, {
                        id: taskId,
                        title: taskTitle
                    }]}
                }
                return item
            });
        case DEL_TASK:
            return [...state].map(item => {
                if(item.id === id) {
                    return {...item, tasks: [...item.tasks].filter(item => item.id !== taskId)
                        }}
                return item
            });
        case EDIT_TASK:
            return [...state].map(item => {
                if (item.id === id) {
                    return {...item, tasks: [...item.tasks].map(task => {
                        if(task.id === taskId) {
                            task.title = taskTitle
                        }
                        return task
                    })}
                }
                return item
            });
        case DND_TASK_IN:
            return [...state].map(item => {
                if (item.id === id) {
                    return {...item,
                        tasks}
                }
                return item
            });
        case DND_TASK_OUT:
            return [...state].map(item => {
                if (item.id === idStart) {
                    return {...item,
                        tasks: [...tasksStart]}
                } else if(item.id === idFinish) {
                    return {...item,
                        tasks: [...tasksFinish]}
                }
                return item
            });
        case DND_COLUMN:
            return [...columns];
        default:
            return state
    }
}

export default columns;
