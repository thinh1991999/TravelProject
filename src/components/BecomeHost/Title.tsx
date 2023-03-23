import React from "react";

const Title = () => {
  return (
    <div className="w-[600px] m-auto">
      <h2
        className="mb-5"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Now, let's give your house a title
      </h2>
      <span
        className="block opacity-0 mb-5 text-xl"
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        Short titles work best. Have fun with it—you can always change it later.
      </span>
      <div
        className=""
        style={{
          animation: `moveTop 3s forwards`,
        }}
      >
        <input
          type="text"
          className="p-5 border border-color w-full rounded-md"
        />
        <span
          className="mt-3 opacity-70 block
        "
        >
          0/32
        </span>
      </div>
    </div>
  );
};

export default Title;
