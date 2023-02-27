import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (status: boolean) => {
    setShow(status);
  };

  return [show, handleShow];
};
