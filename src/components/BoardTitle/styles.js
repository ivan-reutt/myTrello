import styled from 'styled-components';

export const BoardTitleText = styled.span`
  display: inline-block;
  position: fixed;
  top: 48px;
  left: 15px;
  font-size: 22px;
  line-height: 28px;
  height: 30px;
  padding: 0 3px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid transparent;
  font-weight: 500;
  max-width: 90%;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: #d1bf52;
  }
`;

export const BoardTitleInput = styled.input`
  margin: 0;
  position: fixed;
  top: 48px;
  left: 15px;
  font-size: 22px;
  line-height: 28px;
  padding: 0 3px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid transparent;
  max-width: 90%;
  &:focus {
    outline: none;
    border: 1px solid #ffc000;
    cursor: text;
  }
`;
