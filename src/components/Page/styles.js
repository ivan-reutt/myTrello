import styled from 'styled-components';

export const StyledHeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 5px 5px 5px 10px;
  display: flex;
  flex-direction: row;
  background-color: #d1bf52;
`;

export const StyledNoBoardSelected = styled.span`
  font-size: 20px;
  display: inline-block;
  width: 400px;
  position: absolute;
  top: 55px;
  color: ${({ theme }) => theme.text};
`;

export const StyledShowBoardsButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.bold};
  padding: 2px 15px;
  margin-right: 10px;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #fff8cd;
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }
  & i {
    margin-left: 5px;
  }
`;

export const StyledSearchInput = styled.input`
  padding-left: 5px;
  font-size: 16px;
  border-radius: 2px;
  outline: none;
  background-color: #fff8cd;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid #ffc000;
  }
`;
