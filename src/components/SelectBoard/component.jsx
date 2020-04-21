import React, { useState } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledSelectBoardWrap,
  StyledBoardMiniList,
  StyledBoardAdd,
  StyledBoardAddForm,
} from 'components/SelectBoard/styles';
import BoardMini from 'components/BoardMini/index';

const SelectBoard = ({
  addBoard,
  boards,
  selectBoard,
  delBoard,
  showBoardList,
  selectedBoardId,
}) => {
  const [titleBoard, setTitleBoard] = useState('');
  const [isShowFormAddBoard, setIsShowFormAddBoard] = useState(false);

  const showFormAddBoard = () => {
    setIsShowFormAddBoard(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (titleBoard) {
      addBoard(titleBoard);
      setTitleBoard('');
      setIsShowFormAddBoard(false);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.trim()) {
      setTitleBoard(value);
    }
  };

  return (
    <StyledSelectBoardWrap>
      <h1>
        <FormattedMessage id="yourBoards" defaultMessage="Your boards" />
      </h1>
      <StyledBoardMiniList>
        {boards.map((item) => (
          <BoardMini
            title={item.titleBoard}
            key={item.id}
            boardId={item.id}
            numCol={item.columns.length}
            selectBoard={selectBoard}
            showBoardList={showBoardList}
            selectedBoardId={selectedBoardId}
            delBoard={delBoard}
          />
        ))}
        <StyledBoardAdd onClick={showFormAddBoard}>
          {isShowFormAddBoard ? (
            <StyledBoardAddForm onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} maxLength={100} />
              <button type="submit">
                <FormattedMessage id="addBoard" defaultMessage="Add board" />
              </button>
            </StyledBoardAddForm>
          ) : (
            <span>
              <FormattedMessage
                id="createBoard"
                defaultMessage="Create new board"
              />
            </span>
          )}
        </StyledBoardAdd>
      </StyledBoardMiniList>
    </StyledSelectBoardWrap>
  );
};

SelectBoard.defaultProps = {
  selectedBoardId: null,
};

SelectBoard.propTypes = {
  boards: arrayOf(
    shape({
      id: number.isRequired,
      titleBoard: string.isRequired,
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
      ),
    }),
  ).isRequired,
  selectedBoardId: number,
  addBoard: func.isRequired,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
  showBoardList: func.isRequired,
};

export default SelectBoard;
