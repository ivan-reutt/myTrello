import styled from 'styled-components';

export const TaskWrap = styled.div`
  position: relative;
  background-color: ${(props) => (props.isDragging ? '#dbd274' : '#fffadf')};
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

export const TaskTextarea = styled.textarea`
  position: relative;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  font-size: 14px;
  padding: 3px 3px 3px 5px;
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

export const TaskTitle = styled.span`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: inline-block;
  font-size: 14px;
  border: 1px solid transparent;
  padding: 3px 3px 3px 5px;
  line-height: 16px;
`;

export const TaskButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38px;
  padding: 3px;
  position: absolute;
  right: 0;
  top: 0;
  &.edit {
    z-index: 31;
  }
`;

export const TaskButton = styled.button`
  justify-content: center;
  align-items: center;
  display: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #d1b0008c;
  width: 49%;
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
