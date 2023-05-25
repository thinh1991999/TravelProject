import moment from "moment";
import { useAppSelector } from "../../store/hook";

const CalendarInfo = () => {
  const roomDetail = useAppSelector((state) => state.detail.roomDetail);
  const checkin = useAppSelector((state) => state.detail.checkin);
  const checkout = useAppSelector((state) => state.detail.checkout);

  const inTime = moment(checkin);
  const outTime = moment(checkout);
  const days = outTime.diff(inTime, "days");
  return (
    <>
      <h4 className="one-line-max">
        {checkin && checkout
          ? `${days} nights in ${roomDetail?.name}`
          : "Select check-in date"}
      </h4>
      {checkin && checkout ? (
        <span>
          {inTime.calendar()}-{outTime.calendar()}
        </span>
      ) : (
        <span>Add your travel dates for exact pricing</span>
      )}
    </>
  );
};

export default CalendarInfo;
