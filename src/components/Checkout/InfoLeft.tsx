import React, { useState, useCallback, useMemo } from "react";
import { payInfo } from "../../share/data";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckOutSuccess, CheckoutInfoAll } from "../../interfaces/global";
import { getDateArrBetween, getGuests, getTime } from "../../share/ultils";
import Calendar from "../Calendar";
import CalendarInfo from "../Detail/CalenderInfo";
import { useModal } from "../../share/customHooks";
import Modal from "../Modal";
import Guests from "../Guests";
import { GuestsEnum } from "../../interfaces/redux";
import httpService from "../../services/httpService";
import { useAppSelector } from "../../store/hook";
import { toast } from "react-toastify";

enum EditTypes {
  DATE = "DATE",
  GUESTS = "GUESTS",
  NONE = "NONE",
}

const DateTimeHandle = ({
  info,
  handleShow,
}: {
  info: CheckoutInfoAll;
  handleShow: Function;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { checkin, checkout } = info.infoCheckout;
  const disabedArr = useMemo(() => {
    const arr = [];
    for (let vl of info.room.bookings) {
      arr.push(...getDateArrBetween(vl.checkIn, vl.checkOut));
    }
    return arr;
  }, [info]);

  const [values, setValues] = useState<{
    checkin: Date | null;
    checkout: Date | null;
  }>({ checkin, checkout });

  const handleClear = () => {
    setValues({
      checkin: null,
      checkout: null,
    });
  };
  const handleSave = () => {
    if (values.checkin && values.checkout) {
      searchParams.set("checkin", String(values.checkin));
      searchParams.set("checkout", String(values.checkout));
      setSearchParams(searchParams, {
        replace: true,
      });
      handleShow(false);
    }
  };

  return (
    <div className=" min-w-[650px] bg-white border border-color shadow p-5">
      <Calendar
        values={values}
        setValues={setValues}
        isDetailPage={false}
        disabledDate={disabedArr}
      />
      <div className="flex justify-end">
        <button
          className="font-semibold underline hover:opacity-70"
          onClick={() => {
            handleClear();
          }}
        >
          Clear dates
        </button>
        {values.checkin && values.checkout && (
          <button
            className="font-semibold bg-black text-white rounded-md px-5 py-3  hover:opacity-70 ml-5"
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

const GuestHandle = ({
  info,
  handleShow,
}: {
  info: CheckoutInfoAll;
  handleShow: Function;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState<{
    adults: number;
    children: number;
    pets: number;
  }>({
    adults: Number(info.infoCheckout.adults),
    children: Number(info.infoCheckout.children),
    pets: Number(info.infoCheckout.pets),
  });
  const handlePlus = (hint: GuestsEnum) => {
    const vl = values[hint] + 1;
    setValues((prev) => {
      return {
        ...prev,
        [hint]: vl,
      };
    });
  };

  const handleMinus = (hint: GuestsEnum) => {
    if (values[hint] > 1) {
      values[hint]--;
    }
  };

  const handleSave = () => {
    searchParams.set("adults", String(values.adults));
    searchParams.set("children", String(values.children));
    searchParams.set("pets", String(values.pets));
    setSearchParams(searchParams, {
      replace: true,
    });
    handleShow(false);
  };

  return (
    <div className="  bg-white border border-color shadow p-5">
      <div className="flex items-center justify-between">
        <div className="">{/* <CalendarInfo /> */}</div>
      </div>
      <Guests data={{ ...values }} minusF={handleMinus} plusF={handlePlus} />
      <div className="flex justify-end">
        <button
          className="font-semibold bg-black text-white rounded-md px-5 py-3  hover:opacity-70 ml-5"
          onClick={() => {
            handleSave();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};



const InfoLeft = ({
  info,
  setSuccessInfo,
  setLoading,
}: {
  info: CheckoutInfoAll | null;
  setSuccessInfo: Function;
  setLoading:Function
}) => {
  const navigate = useNavigate();
  const [show, handleShow] = useModal(false);

  const user = useAppSelector((state) => state.global.user);
  const token = useAppSelector((state) => state.global.token);
  const [payMethod, setPayMethod] = useState<"PAY_FULL" | "PAY_PART">(
    "PAY_FULL"
  );
  const [modalI, setModalI] = useState<EditTypes>(EditTypes.NONE);

  const renderModalBody = useCallback(() => {
    if (!info) return <></>;
    switch (modalI) {
      case EditTypes.DATE:
        return <DateTimeHandle info={info} handleShow={handleShow} />;
      case EditTypes.GUESTS:
        return (
          <div className="p-10">
            <GuestHandle info={info} handleShow={handleShow} />
          </div>
        );
      default:
        break;
    }
  }, [info, modalI, handleShow]);

  const handleConfirm = useCallback(() => {
    if (!info || !user || !token) return;
    const { checkin, checkout, adults, children, pets } = info.infoCheckout;
    setLoading(true);
    httpService
      .checkout(
        {
          user: user._id,
          checkin,
          checkout,
          adults: Number(adults),
          children: Number(children),
          pets: Number(pets),
          status: payMethod,
          room: info.room._id,
        },
        token
      )
      .then((res) => {
        setSuccessInfo({
          show: true,
          values: res.data.data,
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something error");
        setLoading(false);
      });
  }, [info, user, token, setSuccessInfo, setLoading]);

  if (!info) return <></>;
  const { checkin, checkout, adults, children, pets } = info.infoCheckout;

  return (
    <>
      <div className="pr-10">
        <div className="flex items-center -ml-12">
          <button
            className="btn btn-trans btn-x "
            onClick={() => {
              navigate(-1);
            }}
          >
            <AiOutlineLeft />
          </button>
          <h3>Confirm and pay</h3>
        </div>
        <div className="mt-5">
          <h4>Your trip</h4>
          <div className="pb-10 border-b">
            <div className="flex justify-between items-center my-3 relative">
              <div className="">
                <div className="font-bold">Dates</div>
                <span>
                  {getTime(checkin)} – {getTime(checkout)}
                </span>
              </div>
              <button
                onClick={() => {
                  setModalI(EditTypes.DATE);
                  handleShow(true);
                }}
                className="btn font-bold underline"
              >
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center my-3">
              <div className="">
                <div className="font-bold">Guests</div>
                <span>{getGuests(adults, children, pets)}</span>
              </div>
              <button
                onClick={() => {
                  setModalI(EditTypes.GUESTS);
                  handleShow(true);
                }}
                className="btn font-bold underline"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 pb-10 border-b">
          <h4>Choose how to pay</h4>
          <div className="rounded-md overflow-hidden mt-10">
            {payInfo.map((vl) => {
              return (
                <div
                  className="p-3 border min-h-[80px] flex justify-between items-center"
                  onClick={() => {
                    setPayMethod(vl.hint);
                  }}
                >
                  <div className="">
                    <h5>{vl.title}</h5>
                    <span>{vl.sub}</span>
                  </div>
                  <div
                    className={`${
                      vl.hint === payMethod ? "bg-black" : "border"
                    } w-[30px] h-[30px] rounded-full cursor-pointer   flex items-center justify-center`}
                  >
                    <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => handleConfirm()}
          className="btn btn-primary mt-5 w-full"
        >
          Confirm
        </button>
      </div>
      <Modal isShow={show} setShow={handleShow}>
        {renderModalBody()}
      </Modal>
    </>
  );
};

export default InfoLeft;
