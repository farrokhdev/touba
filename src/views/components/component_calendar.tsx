import { memo, ReactElement, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


function ComponentCalender() {
  const [value, onChange] = useState(new Date());
  // const [dayRange, setDayRange] = React.useState<DayRange>({
  //   from: null,
  //   to: null
  // });
  // const [days, setDays] = React.useState<Day[]>([]);

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
export default memo(ComponentCalender)
