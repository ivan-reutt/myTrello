import styled from 'styled-components';

export const BoardMiniWrap = styled.div`
  position: relative;
  &:hover button {
    display: flex;
  }
`;

export const BoardMiniContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 15px 10px;
  margin: 5px;
  border: 2px solid #ffc000;
  border-radius: 2px;
  cursor: pointer;
  width: 180px;
  height: 110px;
  &:hover {
    background-color: #fff8cd;
  }
  & span {
    word-break: break-word;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    max-height: 60px;
    &:first-of-type {
      font-weight: 500;
    }
  }
`;

export const BoardMiniButton = styled.button`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: 20px;
  border: none;
  display: none;
  background-color: transparent;
  &:hover {
    background-color: #ffc000;
  }
`;
