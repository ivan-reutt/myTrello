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
    IsShowTextarea: false,
  };

  handleChange = (element) => {
    const defaultHeightTextarea = '29px';

    if (element.target.value.trim()) {
      if (element) {
        const target = element.target ? element.target : element;
        target.style.height = defaultHeightTextarea;
        target.style.height = `${target.scrollHeight}px`;

        this.setState({ title: element.target.value });
      }
    }
  };

  handleKeyDown = (ref) => {
    if (ref.key === 'Enter' || ref.key === 'Escape') {
      ref.preventDefault();
      ref.target.blur();
    }
  };

  handleBlur = (id, title) => {
    const { editColumn, idBoard } = this.props;

    editColumn(idBoard, id, title);
    this.setState({ IsShowTextarea: false });
  };

  handleClick = () => {
    this.setState({ IsShowTextarea: true });
  };

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    const { idBoard, id, delColumn, provided } = this.props;
    const { title, IsShowTextarea } = this.state;
    const symbolsInRow = 25;
    const defaultRows = Math.ceil(title.length / symbolsInRow);
    return (
      <StyledColumnTitleWrap>
        {IsShowTextarea ? (
          <StyledColumnTitleTextarea
            defaultValue={title}
            ref={this.textareaRef}
            autoFocus
            rows={defaultRows}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={() => this.handleBlur(id, title)}
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
          onClick={() => delColumn(idBoard, id)}
        >
          <i className="fas fa-times" />
        </StyledColumnTitleButton>
      </StyledColumnTitleWrap>
    );
  }
}

ColumnTitle.propTypes = {
  id: number.isRequired,
  idBoard: number.isRequired,
  title: string.isRequired,
  delColumn: func.isRequired,
  editColumn: func.isRequired,
  provided: object.isRequired,
};

export default ColumnTitle;
