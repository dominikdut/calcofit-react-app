import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component {

  render() {
    return (
      <BigCalendar

        events={events}

        step={60}
        defaultDate={new Date(2015, 3, 1)}
      />
    )
  }
}

export default Calendar