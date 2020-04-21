import React from 'react';
import {
  StyledBoardMiniWrap,
  StyledBoardMiniContent,
  StyledBoardMiniButton,
} from 'components/BoardMini/styles';
import { string, func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

const BoardMini = (props) => {
  const { selectBoard, showBoardList, selectedBoardId, delBoard } = props;

  const chooseBoard = (boardId) => {
    selectBoard(boardId);
    showBoardList();
  };

  const deleteBoard = (boardId) => {
    if (boardId === selectedBoardId) {
      selectBoard(null);
      delBoard(boardId);
    } else delBoard(boardId);
  };

  const { boardId, title, numCol } = props;
  return (
    <StyledBoardMiniWrap>
      <StyledBoardMiniContent onClick={() => chooseBoard(boardId)}>
        <span>{title}</span>
        <span>
          {numCol}
          <FormattedMessage id="numCol" defaultMessages=" columns" />
        </span>
      </StyledBoardMiniContent>
      <StyledBoardMiniButton type="button" onClick={() => deleteBoard(boardId)}>
        <i className="fas fa-times" />
      </StyledBoardMiniButton>
    </StyledBoardMiniWrap>
  );
};

BoardMini.defaultProps = {
  selectedBoardId: null,
};

BoardMini.propTypes = {
  boardId: number.isRequired,
  title: string.isRequired,
  numCol: number.isRequired,
  selectedBoardId: number,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
  showBoardList: func.isRequired,
};

export default BoardMini;
