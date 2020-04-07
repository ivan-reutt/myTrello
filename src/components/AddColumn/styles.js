import styled from 'styled-components';

export const AddColumnForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff8cd;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const AddColumnInput = styled.input`
  border: 2px solid transparent;
  background: transparent;
  width: 240px;
  line-height: 24px;
  font-size: 16px;
  padding: 3px 3px 3px 5px;
  cursor: pointer;
  &:hover {
    background-color: #dbd274;
    &::placeholder {
      color: #000;
    }
  }
  &:focus {
    outline: none;
    cursor: text;
    background-color: #fff8cd;
    border: 2px solid #ffc000;
  }
`;

export const AddColumnButton = styled.button`
  border: none;
  background: transparent;
  color: #555;
  cursor: pointer;
  width: 30px;
  &:hover,
  &:focus {
    background-color: #dbd274;
    color: #000;
    outline-color: #ffc000;
  }
`;
