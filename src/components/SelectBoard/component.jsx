import React from 'react';
import { arrayOf, func, number, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  StyledSelectBoardWrap,
  StyledBoardMiniList,
  StyledBoardAdd,
  StyledBoardAddForm,
} from 'components/SelectBoard/styles';
import BoardMini from 'components/BoardMini/index';

class SelectBoard extends React.PureComponent {
  state = {
    IsShowFormAddBoard: false,
    titleBoard: '',
  };

  showFormAddBoard = () => {
    this.setState({ IsShowFormAddBoard: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { titleBoard } = this.state;
    const { addBoard } = this.props;

    if (titleBoard) {
      addBoard(titleBoard);
      this.setState({ titleBoard: '', IsShowFormAddBoard: false });
    }
  };

  handleChange = (event) => {
    const { value } = event.target;
    if (value.trim()) {
      this.setState({ titleBoard: value });
    }
  };

  render() {
    const {
      boards,
      selectBoard,
      delBoard,
      showBoardList,
      selectedBoardId,
    } = this.props;
    const { IsShowFormAddBoard } = this.state;
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
              id={item.id}
              numCol={item.columns.length}
              selectBoard={selectBoard}
              showBoardList={showBoardList}
              selectedBoardId={selectedBoardId}
              delBoard={delBoard}
            />
          ))}
          <StyledBoardAdd onClick={this.showFormAddBoard}>
            {IsShowFormAddBoard ? (
              <StyledBoardAddForm onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={this.handleChange}
                  maxLength={100}
                />
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
  }
}

SelectBoard.defaultProps = {
  selectedBoardId: null,
};

SelectBoard.propTypes = {
  boards: arrayOf(object).isRequired,
  selectedBoardId: number,
  addBoard: func.isRequired,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
  showBoardList: func.isRequired,
};

export default SelectBoard;
