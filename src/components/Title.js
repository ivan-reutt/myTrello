import React, {createRef} from "react";

import { ColumnTitleWrap, ColumnTitleButton, ColumnTitleTextarea, ColumnTitleText} from "../Styles";

class Title extends React.Component{
    state = {
        title: this.props.title,
        showTextarea: false
    };

    textareaRef = createRef();

    handleChange = (element, defaultHeight)=> {
        if(element) {
            const target = element.target ? element.target : element;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight}px`;
            this.setState({title: element.target.value})
        }
    };

    handleKeyDown = (ref) => {
        if(ref.keyCode === 13 || ref.keyCode === 27) {
            ref.preventDefault();
            ref.target.blur();
        }
    };

    handleBlur = (id, title) => {
        this.props.editColumn(id,title);
        this.setState({showTextarea: false})
    };

    handleClick = () => {
        this.setState({showTextarea: true})
    };

    handleFocus = (e) => {
        e.target.select();
    };

    render() {
        const { id, delColumn } = this.props;
        const defaultRows = Math.ceil(this.state.title.length/25);
        return (
            <ColumnTitleWrap>
                {!this.state.showTextarea ? (
                    <ColumnTitleText onClick={this.handleClick} {...this.props.provided.dragHandleProps}>{this.state.title}</ColumnTitleText>
                ) : (
                    <ColumnTitleTextarea defaultValue={this.state.title}
                                   ref={this.textareaRef}
                                   autoFocus={true}
                                   rows={defaultRows}
                                   onFocus={this.handleFocus}
                                   onChange={(event) => this.handleChange(event, '29px')}
                                   onKeyDown={ref => this.handleKeyDown(ref)}
                                   onBlur={() => this.handleBlur(id, this.state.title)}/>
                )}
                <ColumnTitleButton
                    type={'button'}
                    onClick={() => delColumn(id)}><i className="fas fa-times"></i></ColumnTitleButton>

            </ColumnTitleWrap>
        )
    }
};

export default Title;
