import styled from 'styled-components';

export const TaskWrap = styled.div`
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

export const TaskTextarea = styled.textarea`
  position: relative;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  font-size: 14px;
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

export const TaskTextWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const TaskTitle = styled.span`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: inline-block;
  font-size: 14px;
  border: 1px solid transparent;
  padding: 7px 5px 5px 7px;
  line-height: 16px;
`;

export const TaskButtonGroup = styled.div`
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

export const TaskButton = styled.button`
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

export const TimePickerWrap = styled.div`
  position: absolute;
  left: 100%;
  &:before {
    display: block;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

export const TimePicker = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & .react-datetime-picker__wrapper {
    background-color: #fff;
    margin-bottom: 10px;
  }
`;

export const TimePickerButton = styled.button`
  border: none;
  border-radius: 2px;
  font-size: 16px;
  line-height: 22px;
  padding: 3px 10px;
  cursor: pointer;
`;
