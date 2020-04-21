import styled from 'styled-components';

export const StyledAddTaskWrap = styled.div`
  width: 100%;
  text-align: center;
`;

export const StyledAddTaskButton = styled.button`
  border: none;
  cursor: pointer;
  line-height: 28px;
  color: #555;
  background-color: transparent;
  max-width: 90%;
  border-radius: 2px;
  font-size: ${({ theme }) => theme.buttonAddTaskFontSize};
  padding: 0 15px;
  &:hover {
    background-color: #fff094;
    color: #000;
  }
  &:focus {
    outline: none;
  }
`;
