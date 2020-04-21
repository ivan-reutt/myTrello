import React from 'react';
import { arrayOf, object, func, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import SelectBoard from 'components/SelectBoard/index';

import {
  StyledHeaderWrap,
  StyledNoBoardSelected,
  StyledShowBoardsButton,
  StyledSearchInput,
} from 'components/Page/styles';
import BoardContainer from 'components/Board/container';

class Page extends React.PureComponent {
  state = {
    isShowBoardList: true,
    searchText: '',
  };

  showBoardList = () => {
    const { isShowBoardList } = this.state;
    this.setState({ isShowBoardList: !isShowBoardList });
  };

  changeSearchInput = (event) => {
    const { value } = event.target;

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
    const { isShowBoardList, searchText } = this.state;
    return (
      <div>
        <StyledHeaderWrap>
          <StyledShowBoardsButton type="button" onClick={this.showBoardList}>
            <FormattedMessage
              id="boardsButton"
              defaultMessage="Boards"
              description="Name button"
            />
            <i
              className={
                isShowBoardList ? 'fas fa-angle-up' : 'fas fa-angle-down'
              }
            />
          </StyledShowBoardsButton>
          <FormattedMessage id="search" defaultMessage="Search...">
            {(placeholder) => (
              <StyledSearchInput
                type="text"
                onChange={this.changeSearchInput}
                placeholder={placeholder}
              />
            )}
          </FormattedMessage>
        </StyledHeaderWrap>
        {isShowBoardList && (
          <SelectBoard
            addBoard={addBoard}
            delBoard={delBoard}
            selectBoard={selectBoard}
            boards={boards}
            showBoardList={this.showBoardList}
            selectedBoardId={selectedBoardId}
          />
        )}
        {selectedBoardId ? (
          <BoardContainer searchText={searchText} />
        ) : (
          <StyledNoBoardSelected>
            <FormattedMessage
              id="boardNoSelect"
              defaultMessage="Board not selected. Please, choose your board or create new."
            />
          </StyledNoBoardSelected>
        )}
      </div>
    );
  }
}

Page.defaultProps = {
  selectedBoardId: null,
};

Page.propTypes = {
  boards: arrayOf(object).isRequired,
  selectedBoardId: number,
  addBoard: func.isRequired,
  selectBoard: func.isRequired,
  delBoard: func.isRequired,
};

export default Page;
