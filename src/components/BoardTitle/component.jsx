import React, { createRef } from 'react';

import {
  StyledBoardTitleText,
  StyledBoardTitleInput,
} from 'components/BoardTitle/styles';
import { func, number, string } from 'prop-types';

class BoardTitle extends React.Component {
  inputRef = createRef();

  state = {
    isEditBoardTitle: false,
    title: this.props.value,
    size: this.props.value.length,
  };

  toggleEditTitle = () => {
    this.setState({ isEditBoardTitle: true });
  };

  handleChange = (event) => {
    const { value } = event.target;
    const fixCoefficient = 1.05;

    if (value.trim()) {
      this.setState({ title: value });
      this.setState({ size: value.length * fixCoefficient });
    }
  };

  handleKeyDown = (ref) => {
    if (ref.key === 'Enter' || ref.key === 'Escape') {
      ref.preventDefault();
      ref.target.blur();
    }
  };

  handleBlur = () => {
    const { title } = this.state;
    const { editBoard, boardId } = this.props;

    editBoard(boardId, title);
    this.setState({ isEditBoardTitle: false });
  };

  render() {
    const { value } = this.props;
    const { isEditBoardTitle, size } = this.state;
    return (
      <div>
        {isEditBoardTitle ? (
          <StyledBoardTitleInput
            type="text"
            defaultValue={value}
            ref={this.inputRef}
            autoFocus
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleBlur}
            size={size}
            maxLength={120}
          />
        ) : (
          <StyledBoardTitleText onClick={this.toggleEditTitle}>
            {value}
          </StyledBoardTitleText>
        )}
      </div>
    );
  }
}

BoardTitle.propTypes = {
  value: string.isRequired,
  boardId: number.isRequired,
  editBoard: func.isRequired,
};

export default BoardTitle;
