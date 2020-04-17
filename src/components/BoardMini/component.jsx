import React from 'react';
import {
  BoardMiniWrap,
  BoardMiniContent,
  BoardMiniButton,
} from 'components/BoardMini/styles';
import { string, func, number } from 'prop-types';

class BoardMini extends React.Component {
  chooseBoard = (id) => {
    const { selectBoard, showBoardList } = this.props;
    selectBoard(id);
    showBoardList();
  };

  deleteBoard = (id) => {
    const { selectedBoardId, delBoard, selectBoard } = this.props;
    if (id === selectedBoardId) {
      selectBoard(null);
      delBoard(id);
    } else delBoard(id);
  };

  render() {
    const { id, title, numCol } = this.props;
    return (
      <BoardMiniWrap>
        <BoardMiniContent onClick={() => this.chooseBoard(id)}>
          <span>{title}</span>
          <span>{numCol} columns</span>
        </BoardMiniContent>
        <BoardMiniButton type="button" onClick={() => this.deleteBoard(id)}>
          <i className="fas fa-times" />
        </BoardMiniButton>
      </BoardMiniWrap>
    );
  }
}

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
