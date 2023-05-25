import React, { useEffect ,useState} from "react";
import InfoLeft from "../components/Checkout/InfoLeft";
import InfoRight from "../components/Checkout/InfoRight";
import { useSearchParams } from "react-router-dom";
import httpService from "../services/httpService";
import { CheckOutSuccess, CheckoutInfoAll } from "../interfaces/global";
import LoadingSpinner from "../components/LoadingSpinner";
import { getTime } from "../share/ultils";

const RenderSuccess = ({ data }: { data: CheckOutSuccess|null }) => {
  if(!data)return <></>;
  const {booking,room}=data
  return (
    <div className="py-10 flex justify-center">
      <div className="">
        <h3>Booking your room successfully!</h3>
        <span>
          Below is your booking information, please banking the money to
          complete your booking
        </span>

        <div className="flex items-center mt-5">
          <img
            src={room.images[0].publicUrl}
            alt=""
            className="w-20 h-20 rounded-md"
          />
          <div className="ml-3">
            <div className="flex flex-col">
              <span className="font-bold">{room.name}</span>
              <span>{room.location.address}</span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Check in:</span>
          <span>{getTime(booking.checkIn)}</span>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Check out:</span>
          <span>{getTime(booking.checkOut)}</span>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Adults:</span>
          <span>{booking.adults}</span>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Children:</span>
          <span>{booking.children}</span>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Pets:</span>
          <span>{booking.pets}</span>
        </div>
        <div className="mt-5 flex items-center">
          <span className="font-bold min-w-[200px] block">Status:</span>
          <span>{booking.status}</span>
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isError,setIsError]=useState(false);
  const [data, setData] = useState<CheckoutInfoAll|null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    show: boolean;
    values: null | CheckOutSuccess;
  }>({
    show: false,
    values: null,
  });
  useEffect(() => {
    setLoading(true);
    const room = searchParams.get("room");
    const children = searchParams.get("children");
    const adults = searchParams.get("adults");
    const pets = searchParams.get("pets");
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    setLoading(true);
    httpService
      .getInfoCheckout({ room, children, adults, pets, checkin, checkout })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setLoading(false);
      });
  }, [searchParams]);

  if(successInfo.show){
    return <RenderSuccess data={successInfo.values}/>
  }

  return (
    <>
      {loading && (
        <div className="z-[99] fixed top-0 left-0 right-0 bottom-0 opacity-50 bg-white flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
      <div className="row ">
        {isError && !data === null ? (
          <div className="flex p-10 justify-center">
            <span>Invalid data</span>
          </div>
        ) : (
          <>
            <div className="w-full md:w-3/6 p-2">
              <InfoLeft
                info={data}
                setSuccessInfo={setSuccessInfo}
                setLoading={setLoading}
              />
            </div>
            <div className="md:block hidden w-3/6 p-2  relative">
              <InfoRight info={data} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
