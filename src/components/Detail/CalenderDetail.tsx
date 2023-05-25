import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { clearCheck } from "../../store/slices/detailSlice";
import Calendar from "../Calendar";
import CalendarInfo from "./CalenderInfo";

const CalenderDetail = () => {
  const dispatch = useAppDispatch();
  const disabledArr=useAppSelector(state=>state.detail.disabledDate);
  return (
    <>
      <CalendarInfo />
      <div className="mt-5">
        <div className="lg:block hidden">
          <Calendar disabledDate={disabledArr} showDouble={true} />
        </div>
        <div className="lg:hidden block">
          <Calendar disabledDate={disabledArr} showDouble={false} />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="font-semibold underline hover:opacity-70"
          onClick={() => {
            dispatch(clearCheck());
          }}
        >
          Clear dates
        </button>
      </div>
    </>
  );
};

export default CalenderDetail;
