import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useSearchParams } from "react-router-dom";
import httpService from "../../services/httpService";
import Mess from "../Mess";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [mess, setMess] = useState<{
    type: boolean;
    value: string;
  }>({
    type: true,
    value: "",
  });

  useEffect(() => {
    const token = searchParams.get("token");
    setLoading(true);
    httpService
      .verifyEmail(token)
      .then((res) => {
        setMess({
          type: true,
          value: res.data.message,
        });
        setLoading(false);
      })
      .catch((err) => {
        setMess({
          type: false,
          value: `ERROR: ${err.response.data?.error || "Something error"}`,
        });
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <div className="max-h-screen flex flex-col px-5 py-5 bg-white rounded-md shadow-md sm:w-[500px] sm:h-auto w-full h-full">
      <h3 className="sm:mt-0 mt-10">Verify your email</h3>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Oval
            height={80}
            width={80}
            color="#ccc"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#eee"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          <div className="text-xl font-bold">
            <Mess type={mess.type} value={mess.value} />
          </div>
          {mess.type && (
            <Link to={"/authen/signin"} className="btn btn-primary w-full">
              Sign in now
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Verify;
