import { useState } from "react";

export const useModal = (baseStatus?: boolean): [boolean, Function] => {
  const [show, setShow] = useState<boolean>(baseStatus ? baseStatus : false);

  const handleShow = (status: boolean) => {
    setShow(status);
  };

  return [show, handleShow];
};

export const useDrop = (): [boolean, Function] => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (status: boolean) => {
    setShow(status);
  };

  return [show, handleShow];
};
