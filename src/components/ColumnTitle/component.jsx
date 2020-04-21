import React, { createRef } from 'react';

import { string, func, number, object } from 'prop-types';

import {
  StyledColumnTitleWrap,
  StyledColumnTitleButton,
  StyledColumnTitleTextarea,
  StyledColumnTitleText,
} from './styles';

class ColumnTitle extends React.Component {
  textareaRef = createRef();

  state = {
    title: this.props.title,
    isShowTextarea: false,
  };

  handleChange = (event) => {
    const defaultHeightTextarea = '29px';
    const { target } = event;

    if (target.value.trim()) {
      if (event) {
        const element = target || event;

        element.style.height = defaultHeightTextarea;
        element.style.height = `${element.scrollHeight}px`;
        this.setState({ title: target.value });
      }
    }
  };

  handleKeyDown = (ref) => {
    if (ref.key === 'Enter' || ref.key === 'Escape') {
      ref.preventDefault();
      ref.target.blur();
    }
  };

  handleBlur = (columnId, title) => {
    const { editColumn, boardId } = this.props;

    editColumn(boardId, columnId, title);
    this.setState({ isShowTextarea: false });
  };

  handleClick = () => {
    this.setState({ isShowTextarea: true });
  };

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    const { boardId, columnId, delColumn, provided } = this.props;
    const { title, isShowTextarea } = this.state;
    const symbolsInRow = 25;
    const defaultRows = Math.ceil(title.length / symbolsInRow);
    return (
      <StyledColumnTitleWrap>
        {isShowTextarea ? (
          <StyledColumnTitleTextarea
            defaultValue={title}
            ref={this.textareaRef}
            autoFocus
            rows={defaultRows}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={() => this.handleBlur(columnId, title)}
          />
        ) : (
          <StyledColumnTitleText
            onClick={this.handleClick}
            {...provided.dragHandleProps}
          >
            {title}
          </StyledColumnTitleText>
        )}
        <StyledColumnTitleButton
          type="button"
          onClick={() => delColumn(boardId, columnId)}
        >
          <i className="fas fa-times" />
        </StyledColumnTitleButton>
      </StyledColumnTitleWrap>
    );
  }
}

ColumnTitle.propTypes = {
  columnId: number.isRequired,
  boardId: number.isRequired,
  title: string.isRequired,
  delColumn: func.isRequired,
  editColumn: func.isRequired,
  provided: object.isRequired,
};

export default ColumnTitle;
