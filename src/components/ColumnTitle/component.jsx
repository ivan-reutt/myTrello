import React, { createRef } from 'react';

import { string, func, number, object } from 'prop-types';

import {
  ColumnTitleWrap,
  ColumnTitleButton,
  ColumnTitleTextarea,
  ColumnTitleText,
} from './styles';

class ColumnTitle extends React.Component {
  textareaRef = createRef();

  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      title,
      showTextarea: false,
    };
  }

  handleChange = (element, defaultHeight) => {
    if (element.target.value.trim()) {
      if (element) {
        const target = element.target ? element.target : element;
        target.style.height = defaultHeight;
        target.style.height = `${target.scrollHeight}px`;
        this.setState({ title: element.target.value });
      }
    }
  };

  handleKeyDown = (ref) => {
    if (ref.keyCode === 13 || ref.keyCode === 27) {
      ref.preventDefault();
      ref.target.blur();
    }
  };

  handleBlur = (id, title) => {
    const { editColumn, idBoard } = this.props;
    editColumn(idBoard, id, title);
    this.setState({ showTextarea: false });
  };

  handleClick = () => {
    this.setState({ showTextarea: true });
  };

  handleFocus = (e) => {
    e.target.select();
  };

  render() {
    const { idBoard, id, delColumn, provided } = this.props;
    const { title, showTextarea } = this.state;
    const defaultRows = Math.ceil(title.length / 25);
    return (
      <ColumnTitleWrap>
        {!showTextarea ? (
          <ColumnTitleText
            onClick={this.handleClick}
            {...provided.dragHandleProps}
          >
            {title}
          </ColumnTitleText>
        ) : (
          <ColumnTitleTextarea
            defaultValue={title}
            ref={this.textareaRef}
            autoFocus
            rows={defaultRows}
            onFocus={this.handleFocus}
            onChange={(event) => this.handleChange(event, '29px')}
            onKeyDown={(ref) => this.handleKeyDown(ref)}
            onBlur={() => this.handleBlur(id, title)}
          />
        )}
        <ColumnTitleButton type="button" onClick={() => delColumn(idBoard, id)}>
          <i className="fas fa-times" />
        </ColumnTitleButton>
      </ColumnTitleWrap>
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
