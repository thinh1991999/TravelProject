import { useAppDispatch } from "../../store/hook";
import { clearCheck } from "../../store/slices/detailSlice";
import Calendar from "../Calendar";
import CalendarInfo from "./CalenderInfo";

const CalenderDetail = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <CalendarInfo />
      <div className="mt-5">
        <div className="lg:block hidden">
          <Calendar showDouble={true} />
        </div>
        <div className="lg:hidden block">
          <Calendar showDouble={false} />
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
