import moment from "moment";
import React, { useEffect, useState } from "react";
import CalendarE from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setCheckin, setCheckout } from "../store/slices/detailSlice";

const Calendar = ({ showDouble = true }: { showDouble?: boolean }) => {
  const dispatch = useAppDispatch();
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);

  const [value, setValue] = useState<
    [Date | null, Date | null] | null | Date
  >();
  // Date.now()

  const handleChooseDay = (e: Date) => {
    if (checkin) {
      if (moment(checkin).isAfter(moment(e))) {
        dispatch(setCheckin(e));
      } else {
        dispatch(setCheckout(e));
      }
    } else {
      dispatch(setCheckin(e));
    }
  };

  useEffect(() => {
    setValue([checkin, checkout]);
  }, [checkin, checkout]);

  return (
    <div className="" id="date_box">
      <CalendarE
        value={value}
        showDoubleView={showDouble}
        className="w-full"
        onClickDay={handleChooseDay}
      />
    </div>
  );
};

export default Calendar;
