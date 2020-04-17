import React from 'react';
import { array, func, number } from 'prop-types';

import SelectBoard from 'components/SelectBoard/index';

import {
  HeaderWrap,
  NoBoardSelected,
  ShowBoardsButton,
  SearchInput,
} from 'components/Page/styles';
import BoardContainer from 'components/Board/container';

class Page extends React.Component {
  state = {
    showBoardList: true,
    searchText: '',
  };

  showBoardList = () => {
    const { showBoardList } = this.state;
    this.setState({ showBoardList: !showBoardList });
  };

  changeSearchInput = (e) => {
    const { value } = e.target;
    if (value.trim()) {
      this.setState({ searchText: value.toLowerCase() });
    } else this.setState({ searchText: '' });
  };

  render() {
    const {
      boards,
      addBoard,
      selectBoard,
      delBoard,
      selectedBoardId,
    } = this.props;
    const { showBoardList, searchText } = this.state;
    return (
      <div>
        <HeaderWrap>
          <ShowBoardsButton type="button" onClick={this.showBoardList}>
            Boards
            <i
              className={
                showBoardList ? 'fas fa-angle-up' : 'fas fa-angle-down'
              }
            />
          </ShowBoardsButton>
          <SearchInput
            type="text"
            onChange={this.changeSearchInput}
            placeholder="Search..."
          />
        </HeaderWrap>
        {showBoardList ? (
          <SelectBoard
            addBoard={addBoard}
            delBoard={delBoard}
            selectBoard={selectBoard}
            boards={boards}
            showBoardList={this.showBoardList}
            selectedBoardId={selectedBoardId}
          />
        ) : (
          ''
        )}
        {selectedBoardId ? (
          <BoardContainer searchText={searchText} />
        ) : (
          <NoBoardSelected>
            Please, choose your board or create new.
          </NoBoardSelected>
        )}
      </div>
    );
  }
}

Page.defaultProps = {
  selectedBoardId: null,
};

Page.propTypes = {
  boards: array.isRequired,
  selectedBoardId: number,
  addBoard: func.isRequired,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
};

export default Page;
