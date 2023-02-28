import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isShow, setShow }: { isShow: boolean; setShow: Function }) => {
  if (!isShow) return <></>;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="w-full h-full relative flex justify-center items-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"
          onClick={() => setShow(false)}
        ></div>
        <div className="w-[500px] h-[500px] bg-white relative rounded-md p-5">
          <button
            className="btn btn-trans btn-x text-xl font-bold w-[50px] h-[50px]"
            onClick={() => setShow(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
