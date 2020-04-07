import styled from 'styled-components';

export const AddTaskWrap = styled.div`
  width: 100%;
  text-align: center;
`;

export const AddTaskButton = styled.button`
  border: none;
  cursor: pointer;
  line-height: 28px;
  color: #555;
  background-color: transparent;
  width: 140px;
  border-radius: 2px;
  font-size: 14px;
  &:hover {
    background-color: #fff094;
    color: #000;
  }
  &:focus {
    outline: none;
  }
`;
