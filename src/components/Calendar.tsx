import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import CalendarE from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setCheckin, setCheckout } from "../store/slices/detailSlice";
import { checkIncludeDate, getDateArrBetween } from "../share/ultils";

const Calendar = ({
  showDouble = true,
  disabledDate,
  isDetailPage = true,
  values,
  setValues,
}: {
  showDouble?: boolean;
  disabledDate?: string[];
  isDetailPage?: boolean;
  values?: {
    checkin: Date | null;
    checkout: Date | null;
  };
  setValues?: Function;
}) => {
  const dispatch = useAppDispatch();
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);

  const currDay = useRef(moment());

  const [value, setValue] = useState<
    [Date | null, Date | null] | null | Date
  >();
  console.log(checkin,checkout);
  
  const handleChooseDay = (e: Date) => {
    if (isDetailPage) {
      if (checkin) {
        const dateBtweenArr = getDateArrBetween(
          checkin.toDateString(),
          e.toDateString()
        );
        let isValidCheckOut = true;
        for (let date of dateBtweenArr) {
          const isExistDisbaled = disabledDate
            ? checkIncludeDate(disabledDate, new Date(date))
            : false;
          if (isExistDisbaled) {
            isValidCheckOut = false;
            break;
          }
        }
        if (isValidCheckOut && !moment(checkin).isAfter(moment(e))) {
          dispatch(setCheckout(e));
        } else {
          dispatch(setCheckin(e));
          dispatch(setCheckout(null));
        }
      } else {
        dispatch(setCheckin(e));
      }
    }else{
      if(!values || !setValues) return;
      const {checkin,checkout}=values
      if (checkin) {
        const dateBtweenArr = getDateArrBetween(
          new Date(checkin).toDateString(),
          e.toDateString()
        );
        let isValidCheckOut = true;
        for (let date of dateBtweenArr) {
          const isExistDisbaled = disabledDate
            ? checkIncludeDate(disabledDate, new Date(date))
            : false;
          if (isExistDisbaled) {
            isValidCheckOut = false;
            break;
          }
        }
        if (isValidCheckOut && !moment(checkin).isAfter(moment(e))) {
          setValues({
            checkin,
            checkout:e
          })
        } else {
          setValues({
            checkin:e,
            checkout: null,
          });
        }
      } else {
         setValues({
           checkin: e,
         });
      }
    }
  };
  useEffect(() => {
    if (!isDetailPage) return;
    setValue([checkin, checkout]);
  }, [checkin, checkout, isDetailPage]);

  useEffect(() => {
    if (values) {
      setValue([
       values?.checkin? new Date(values.checkin ):null,
       values?.checkout? new Date(values.checkout ):null,
      ]);
    }
  }, [values]);

  return (
    <div className="" id="date_box">
      <CalendarE
        value={value}
        showDoubleView={showDouble}
        className="w-full"
        onClickDay={handleChooseDay}
        tileDisabled={({ activeStartDate, date, view }) => {
          const dateC = moment(date);
          const checkDiff = currDay.current.diff(dateC, "days");
          if (checkDiff > 0) {
            return true;
          } else {
            const isDisable = disabledDate
              ? checkIncludeDate(disabledDate, date)
              : false;
            return isDisable;
          }
        }}
      />
    </div>
  );
};

export default Calendar;
