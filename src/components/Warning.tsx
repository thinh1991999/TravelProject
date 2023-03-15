import React from "react";

const Warning = ({
  title,
  sub,
  close,
  accept,
}: {
  title: string;
  sub: string;
  close: Function;
  accept: Function;
}) => {
  return (
    <div className="py-5 px-5">
      <h3>{title}</h3>
      <p>{sub}</p>
      <div className="mt-10 flex items-center justify-end">
        <button className="btn btn-trans" onClick={() => close()}>
          Cancer
        </button>
        <button
          className="btn btn-red ml-3"
          onClick={() => {
            accept();
            close();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Warning;
