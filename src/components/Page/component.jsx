import React, { useState } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import SelectBoard from 'components/SelectBoard/index';
import SearchInput from 'components/SearchInput/index';

import {
  StyledHeaderWrap,
  StyledNoBoardSelected,
  StyledShowBoardsButton,
} from 'components/Page/styles';
import BoardContainer from 'components/Board/container';

const Page = ({ boards, addBoard, selectBoard, delBoard, selectedBoardId }) => {
  const [searchText, setSearchText] = useState('');

  const [isShowBoardList, setIsShowBoardList] = useState(true);

  const showBoardList = () => {
    setIsShowBoardList(!isShowBoardList);
  };

  const changeSearchInput = (event) => {
    const { value } = event.target;

    if (value.trim()) {
      setSearchText(value.toLowerCase());
    } else setSearchText('');
  };

  return (
    <div>
      <StyledHeaderWrap>
        <StyledShowBoardsButton type="button" onClick={showBoardList}>
          <FormattedMessage
            id="boardsButton"
            defaultMessage="Boards"
            description="Name button"
          />
          <i className={`fas fa-angle-${isShowBoardList ? 'up' : 'down'}`} />
        </StyledShowBoardsButton>
        <SearchInput changeSearchInput={changeSearchInput} />
      </StyledHeaderWrap>
      {isShowBoardList && (
        <SelectBoard
          addBoard={addBoard}
          delBoard={delBoard}
          selectBoard={selectBoard}
          boards={boards}
          showBoardList={showBoardList}
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
};

Page.defaultProps = {
  selectedBoardId: null,
};

Page.propTypes = {
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
};

export default Page;
