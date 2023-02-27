import React, { useState } from "react";
import CalendarE from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <CalendarE
        onChange={onChange}
        value={value}
        showDoubleView={true}
        className="w-full"
      />
    </div>
  );
};

export default Calendar;
