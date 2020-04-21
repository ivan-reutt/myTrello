import styled from 'styled-components';

export const StyledSelectWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 10px;
  right: 15px;
  align-items: center;
  & i {
    line-height: 1px;
    font-size: 18px;
  }
`;

export const StyledSelect = styled.select`
  font-size: 18px;
  margin-left: 8px;
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: #fff8cd;
`;
