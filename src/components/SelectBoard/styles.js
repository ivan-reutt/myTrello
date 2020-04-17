import styled from 'styled-components';

export const SelectBoardWrap = styled.div`
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 100px;
  background-color: #fff;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const BoardMiniList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`;

export const BoardAdd = styled.div`
  position: relative;
  margin: 5px;
  cursor: pointer;
  width: 180px;
  height: 110px;
  border-radius: 3px;
  border: 2px dashed #ffc000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fff094;
  }
`;

export const BoardAddForm = styled.form`
  width: 90%;
  text-align: center;
  & input {
    border: 1px solid #ffc000;
    font-size: 16px;
    outline: none;
    margin-bottom: 10px;
    padding: 3px;
    width: 100%;
  }
  & button {
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 2px;
    margin: 0 auto;
    padding: 3px 5px;
    cursor: pointer;
    background-color: #fff8cd;
    &:hover {
      background-color: #dbd274;
    }
  }
`;
