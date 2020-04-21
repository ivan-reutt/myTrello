import styled from 'styled-components';

export const StyledAddTaskFormWrap = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledAddTaskFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  font-size: ${({ theme }) => theme.buttonAddTaskFontSize};
  line-height: 24px;
  color: #555;
  margin: 3px 2px 0;
  padding: 3px 7px;
  &:hover {
    color: #000;
    background-color: #fff094;
  }
  &:focus {
    outline: none;
  }
  & i {
    margin-right: 3px;
  }
`;
