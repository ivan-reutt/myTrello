import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { func, object } from 'prop-types';

import { FormattedMessage } from 'react-intl';
import {
  StyledTimePicker,
  StyledTimePickerButton,
  StyledTimePickerWrap,
} from './styles';

const Calendar = ({ onChange, value, showTimer }) => {
  return (
    <StyledTimePickerWrap>
      <StyledTimePicker>
        <DateTimePicker
          onChange={onChange}
          value={value}
          disableClock
          clearIcon={null}
          showLeadingZeros
        />
        <StyledTimePickerButton type="button" onClick={showTimer}>
          <FormattedMessage id="timePicker" defaultMessage="Apply" />
        </StyledTimePickerButton>
      </StyledTimePicker>
    </StyledTimePickerWrap>
  );
};

Calendar.propTypes = {
  onChange: func.isRequired,
  showTimer: func.isRequired,
  value: object.isRequired,
};

export default Calendar;
