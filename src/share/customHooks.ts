import { useState } from "react";

export const useModal = (): [boolean, Function] => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (status: boolean) => {
    setShow(status);
  };

  return [show, handleShow];
};
