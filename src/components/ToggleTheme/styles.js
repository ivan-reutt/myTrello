import styled from 'styled-components';

const ToggleContainer = styled.button`
  position: fixed;
  top: 3px;
  left: calc(50% - 45px);
  background: ${({ theme }) => theme.gradient};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 3px;
  width: 90px;
  height: 36px;
  transition: all 0.25s linear;
  &:active,
  &:focus {
    outline: none;
  }

  svg {
    height: auto;
    width: 30px;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export default ToggleContainer;
