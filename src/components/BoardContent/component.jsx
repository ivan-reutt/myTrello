import React from 'react';
import Column from 'components/Column';
import AddColumn from 'components/AddColumn';
import { arrayOf, func, number, object, shape, string } from 'prop-types';
import StyledColumnList from './styles';

const BoardContent = ({
  addColumn,
  editColumn,
  delColumn,
  delTask,
  editTask,
  addTask,
  boardId,
  columns,
  searchText,
  provided,
}) => {
  const filteredColumns = columns.filter((item) =>
    item.title.toLowerCase().includes(searchText),
  );
  return (
    <StyledColumnList ref={provided.innerRef} {...provided.droppableProps}>
      {filteredColumns.map((elem, index) => (
        <Column
          boardId={boardId}
          tasks={elem.tasks}
          columnId={elem.id}
          key={elem.id}
          title={elem.title}
          editColumn={editColumn}
          delColumn={delColumn}
          addTask={addTask}
          delTask={delTask}
          editTask={editTask}
          index={index}
        />
      ))}
      {provided.placeholder}
      <AddColumn addColumn={addColumn} boardId={boardId} />
    </StyledColumnList>
  );
};

BoardContent.propTypes = {
  columns: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      tasks: arrayOf(
        shape({
          id: number.isRequired,
          title: string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  searchText: string.isRequired,
  boardId: number.isRequired,
  addColumn: func.isRequired,
  editColumn: func.isRequired,
  delColumn: func.isRequired,
  delTask: func.isRequired,
  editTask: func.isRequired,
  addTask: func.isRequired,
  provided: object.isRequired,
};
export default BoardContent;
