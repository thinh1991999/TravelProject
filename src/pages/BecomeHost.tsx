import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const BecomeHost = ({
  children,
  back,
  next,
  level,
}: {
  children: ReactElement;
  back?: string;
  next?: string;
  level: number;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="container m-auto py-10">
          <div className="">
            <Logo color="text-black" showText={false} />
          </div>
        </div>
      </header>
      <main className={`flex-1  container m-auto`}>{children}</main>
      <div className="">
        <div className="h-[4px] w-full bg-gray-400 relative">
          <div
            className="absolute top-0 bottom-0 left-0 bg-black transition-all duration-300"
            style={{
              width: `${(level * 100) / 12}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center py-6 px-10">
          {back ? (
            <Link
              to={back}
              className="font-semibold underline hover:opacity-70"
            >
              Back
            </Link>
          ) : (
            <div></div>
          )}
          {next ? (
            <Link to={next} className="btn btn-black">
              Next
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;
