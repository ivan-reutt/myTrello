import styled from 'styled-components';

const StyledSearchInput = styled.input`
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

export default StyledSearchInput;
