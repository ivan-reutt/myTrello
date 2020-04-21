import styled from 'styled-components';

export const StyledColumnTitleWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  margin-bottom: 10px;
  width: 100%;
  max-width: 100%;
  margin-left: 5px;
  position: relative;
`;

export const StyledColumnTitleButton = styled.button`
  border: none;
  border-radius: 2px;
  color: #555;
  background-color: #fffadf;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff094;
    color: #000;
  }
`;

export const StyledColumnTitleTextarea = styled.textarea`
  padding: 2px;
  flex-grow: 1;
  resize: none;
  background-color: #fffadf;
  font-size: ${({ theme }) => theme.columnFontSize};
  cursor: pointer;
  overflow: hidden;
  font-weight: ${({ theme }) => theme.bold};
  &:focus {
    outline: none;
    border: 1px solid #ffc000;
    cursor: text;
  }
`;

export const StyledColumnTitleText = styled.span`
  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;
  border: 1px solid transparent;
  padding: 2px;
  flex-grow: 1;
  font-size: ${({ theme }) => theme.columnFontSize};
  font-weight: ${({ theme }) => theme.bold};
`;
