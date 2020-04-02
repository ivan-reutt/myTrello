import React from "react";
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Title from './Title';
import Task from './Task';
import AddTask from "./AddTask";

import { ColumnComponent, TaskListWrap } from "../Styles";

const Column = (props) => {
        const {id, title, editColumn, delColumn, delTask, editTask, addTask, tasks, index} = props;
        return (
            <Draggable draggableId={`${id}column`} index={index} >
                {provided => (
                    <ColumnComponent ref={provided.innerRef} {...provided.draggableProps}>
                        <Title provided={provided}
                               title={title}
                               id={id}
                               editColumn={editColumn}
                               delColumn={delColumn}/>
                               <Droppable droppableId={`${id}`} type={'task'}>
                                   {provided => (
                                   <TaskListWrap ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks.map((elem, index) => (
                                            <Task key={elem.id}
                                                  id={id}
                                                  taskId={elem.id}
                                                  delTask={delTask}
                                                  editTask={editTask}
                                                  title={elem.title}
                                                  index={index}/>
                                        ))}
                                       {provided.placeholder}
                                   </TaskListWrap>
                                   )}
                               </Droppable>
                        <AddTask id={id} addTask={addTask}/>
                    </ColumnComponent>
                )}
            </Draggable>
        )
};

export default Column;
