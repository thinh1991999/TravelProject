import React, { useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import httpService from "../../services/httpService";
import Validator from "../../share/validator";
import Mess from "../Mess";

const rules = [
  {
    field: "email",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "email",
    method: "isEmail",
    validWhen: true,
    message: "This field is email",
  },
];

const ForgotPw = () => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
  }>({});
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const validator = useRef(new Validator(rules)).current;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(
      validator.validate({
        email,
      })
    );
    if (validator.isValid) {
      setLoading(true);
      httpService
        .forgotPw(email)
        .then((res) => {
          setMess({
            type: true,
            value: res.data.message || "Success",
          });
          setLoading(false);
        })
        .catch((err) => {
          setMess({
            type: false,
            value: err.response.data.error || "Something error",
          });
          setLoading(false);
        });
    }
  };

  return (
    <div className="px-5 py-5 flex flex-col justify-center bg-white rounded-md shadow-md sm:w-[500px] sm:h-auto w-full h-full">
      <p>
        Forgot your account’s password? Enter your email address and we’ll send
        you a recovery link.
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full flex flex-col my-5">
          <label htmlFor="" className="label-title">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            // onFocus={(e) => handleFocus(e)}
            type="text"
            placeholder="Enter your email"
            className={`${
              errors?.email ? "input-err" : ""
            } py-2 px-3 border border-color rounded-sm mt-1 `}
            onFocus={() => {
              setErrors({});
              setMess({ type: true, value: "" });
            }}
          />
          {errors?.email && <p className="text-error mt-3">{errors.email}</p>}
        </div>
        <Mess type={mess.type} value={mess.value} />
        {loading ? (
          <button type="button" className="btn btn-primary btn-loading w-full">
            <TailSpin height={30} width={30} color="#ccc" />
          </button>
        ) : (
          <button className="btn btn-primary w-full">
            Send recovery email
          </button>
        )}
      </form>
    </div>
  );
};

export default ForgotPw;
