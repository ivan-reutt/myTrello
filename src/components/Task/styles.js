import styled from 'styled-components';

export const StyledTaskWrap = styled.div`
  background-color: ${(props) =>
    props.isDragging ? '#dbd274' : props.backgroundColor};
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    button {
      display: flex;
    }
  }
  &.editTask:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    & button {
      display: none;
    }
  }
`;

export const StyledTaskTextarea = styled.textarea`
  position: relative;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.taskFontSize};
  padding: 7px 5px 5px 7px;
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  z-index: 31;
  &:enabled,
  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid #ffc000;
    border-radius: 1px;
    cursor: text;
  }
`;

export const StyledTaskTextWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTaskTitle = styled.span`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: inline-block;
  font-size: ${({ theme }) => theme.taskFontSize};
  border: 1px solid transparent;
  padding: 7px 5px 5px 7px;
  line-height: 16px;
`;

export const StyledTaskButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 58px;
  padding: 3px;
  position: absolute;
  right: 0;
  top: 0;
  &.edit {
    z-index: 31;
  }
`;

export const StyledTaskButton = styled.button`
  justify-content: center;
  align-items: center;
  display: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #d1b0008c;
  width: 33%;
  height: 18px;
  color: #000;
  &:hover {
    color: #000;
    background-color: #ffc000;
  }
  &:active {
    outline: transparent;
  }
`;
