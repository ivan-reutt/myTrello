import styled from 'styled-components';

export const StyledColumnComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
  padding: 15px 10px 10px;
  background-color: #fffadf;
  border-radius: 3px;
  min-width: 300px;
  max-width: 300px;
  min-height: 120px;
  max-height: 630px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
`;

export const StyledTaskListWrap = styled.div`
  padding: 2px;
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: visible;
`;
