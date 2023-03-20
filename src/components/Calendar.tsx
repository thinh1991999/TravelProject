import React, { useState } from "react";
import CalendarE from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = ({ showDouble = true }: { showDouble?: boolean }) => {
  const [value, onChange] = useState(new Date());
  return (
    <CalendarE
      onChange={onChange}
      value={value}
      showDoubleView={showDouble}
      className="w-full"
    />
  );
};

export default Calendar;
