import styled from 'styled-components';

export const StyledTimePickerWrap = styled.div`
  position: absolute;
  left: 100%;
  &:before {
    display: block;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

export const StyledTimePicker = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & .react-datetime-picker__wrapper {
    background-color: #fff;
    margin-bottom: 10px;
  }
`;

export const StyledTimePickerButton = styled.button`
  border: none;
  border-radius: 2px;
  font-size: 16px;
  line-height: 22px;
  padding: 3px 10px;
  cursor: pointer;
`;
