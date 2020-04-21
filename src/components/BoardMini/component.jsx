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

  const chooseBoard = (id) => {
    selectBoard(id);
    showBoardList();
  };

  const deleteBoard = (id) => {
    if (id === selectedBoardId) {
      selectBoard(null);
      delBoard(id);
    } else delBoard(id);
  };

  const { id, title, numCol } = props;
  return (
    <StyledBoardMiniWrap>
      <StyledBoardMiniContent onClick={() => chooseBoard(id)}>
        <span>{title}</span>
        <span>
          {numCol}
          <FormattedMessage id="numCol" defaultMessages=" columns" />
        </span>
      </StyledBoardMiniContent>
      <StyledBoardMiniButton type="button" onClick={() => deleteBoard(id)}>
        <i className="fas fa-times" />
      </StyledBoardMiniButton>
    </StyledBoardMiniWrap>
  );
};

BoardMini.defaultProps = {
  selectedBoardId: null,
};

BoardMini.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  numCol: number.isRequired,
  selectedBoardId: number,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
  showBoardList: func.isRequired,
};

export default BoardMini;
