import React, { createRef } from 'react';

import { BoardTitleText, BoardTitleInput } from 'components/BoardTitle/styles';
import { func, number, string } from 'prop-types';

class BoardTitle extends React.Component {
  inputRef = createRef();

  constructor(props) {
    super(props);
    const { value } = this.props;
    const { length } = value;
    this.state = {
      editBoardTitle: false,
      title: value,
      size: length,
    };
  }

  toggleEditTitle = () => {
    this.setState({ editBoardTitle: true });
  };

  handleChange = (event) => {
    const { value } = event.target;
    if (value.trim()) {
      this.setState({ title: value });
      this.setState({ size: value.length * 1.05 });
    }
  };

  handleKeyDown = (ref) => {
    if (ref.keyCode === 13 || ref.keyCode === 27) {
      ref.preventDefault();
      ref.target.blur();
    }
  };

  handleBlur = () => {
    const { title } = this.state;
    const { editBoard, idBoard } = this.props;
    editBoard(idBoard, title);
    this.setState({ editBoardTitle: false });
  };

  render() {
    const { value } = this.props;
    const { editBoardTitle, size } = this.state;
    return (
      <div>
        {!editBoardTitle ? (
          <BoardTitleText onClick={this.toggleEditTitle}>
            {value}
          </BoardTitleText>
        ) : (
          <BoardTitleInput
            type="text"
            defaultValue={value}
            ref={this.inputRef}
            autoFocus
            onChange={this.handleChange}
            onKeyDown={(ref) => this.handleKeyDown(ref)}
            onBlur={this.handleBlur}
            size={size}
            maxLength={120}
          />
        )}
      </div>
    );
  }
}

BoardTitle.propTypes = {
  value: string.isRequired,
  idBoard: number.isRequired,
  editBoard: func.isRequired,
};

export default BoardTitle;
