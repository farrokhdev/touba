import { memo, ReactElement, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {}

export function ComponentCalendar({}: Props): ReactElement {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div className="calendar-component">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        selectRange
      />
    </div>
  );
}

export default memo(ComponentCalendar);
