import React, { memo } from 'react'
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";



function CcomponentCalender() {
  const [day, setDay] = React.useState<DayValue>(null);
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null
  });
  const [days, setDays] = React.useState<Day[]>([]);

  return (
    <>
    <Calendar
    calendarClassName="custom-calendar" // and this

      value={day}
      onChange={setDay}
      shouldHighlightWeekends
    />
    </>
  );
}
export default memo(CcomponentCalender)