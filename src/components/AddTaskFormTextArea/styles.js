import styled from 'styled-components';

const StyledAddTaskFormTextarea = styled.textarea`
  width: 100%;
  height: 48px;
  padding: 3px 7px;
  flex-grow: 1;
  border: 1px solid #ffc000;
  resize: none;
  background-color: #fff;
  font-size: ${({ theme }) => theme.taskFontSize};
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  &:focus {
    outline: none;
  }
`;

export default StyledAddTaskFormTextarea;
