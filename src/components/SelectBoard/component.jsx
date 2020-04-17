import React from 'react';
import { array, func, number } from 'prop-types';

import {
  SelectBoardWrap,
  BoardMiniList,
  BoardAdd,
  BoardAddForm,
} from 'components/SelectBoard/styles';
import BoardMini from 'components/BoardMini/index';

class SelectBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormAddBoard: false,
      titleBoard: '',
    };
  }

  showFormAddBoard = () => {
    this.setState({ showFormAddBoard: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { titleBoard } = this.state;
    const { addBoard } = this.props;
    if (titleBoard) {
      addBoard(titleBoard);
      this.setState({ titleBoard: '', showFormAddBoard: false });
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
    const { showFormAddBoard } = this.state;
    return (
      <SelectBoardWrap>
        <h1>Your boards</h1>

        <BoardMiniList>
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
          <BoardAdd onClick={this.showFormAddBoard}>
            {!showFormAddBoard ? (
              <span>Create new board</span>
            ) : (
              <BoardAddForm onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={(event) => this.handleChange(event)}
                  maxLength={100}
                />
                <button type="submit">Add board</button>
              </BoardAddForm>
            )}
          </BoardAdd>
        </BoardMiniList>
      </SelectBoardWrap>
    );
  }
}

SelectBoard.defaultProps = {
  selectedBoardId: null,
};

SelectBoard.propTypes = {
  boards: array.isRequired,
  selectedBoardId: number,
  addBoard: func.isRequired,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
  showBoardList: func.isRequired,
};

export default SelectBoard;
