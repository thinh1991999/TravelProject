import React from "react";

const Mess = ({ type, value }: { type: boolean; value: string }) => {
  if (!value) return <></>;
  if (type) {
    return <p className="text-blue-500 my-2">{value}</p>;
  }
  console.log(123);

  return <p className="text-error my-2">{value}</p>;
};

export default Mess;
