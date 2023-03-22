import React, { useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useSearchParams } from "react-router-dom";
import httpService from "../../services/httpService";
import Validator from "../../share/validator";
import Mess from "../Mess";

const rules = [
  {
    field: "password",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "password",
    method: "isLength",
    args: [{ min: 6, max: 10 }],
    validWhen: true,
    message: "Password must be at least 6 characters",
  },
];

const ResetPw = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState<{
    password: string;
    cfPassword: string;
  }>({ password: "", cfPassword: "" });
  const [errors, setErrors] = useState<{
    password?: string;
    cfPassword?: string;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });
  const validator = useRef(new Validator(rules)).current;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validator.validate(JSON.parse(JSON.stringify(values))));
    if (validator.isValid && comparePw()) {
      const token = searchParams.get("token");
      setLoading(true);
      httpService
        .resetPwLink(token, values.password)
        .then((res) => {
          setMess({
            type: true,
            value: res.data.message,
          });
          hanldeClear();
          setLoading(false);
        })
        .catch((err) => {
          setMess({
            type: false,
            value: err.response?.data.error || "Something error",
          });
          setLoading(false);
        });
    }
  };

  const hanldeClear = () => {
    setValues({ password: "", cfPassword: "" });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setMess({
      type: true,
      value: "",
    });
  };

  const comparePw = (): boolean => {
    if (values.password !== values.cfPassword) {
      setErrors({
        ...errors,
        cfPassword: "Comfirm password is not correct",
      });
      return false;
    }
    return true;
  };

  return (
    <div className="max-h-screen flex flex-col px-5 py-5 bg-white rounded-md shadow-md sm:w-[500px] sm:h-auto w-full h-full">
      <h3 className="sm:mt-0 mt-10">Reset your pasword</h3>
      <form onSubmit={(e) => handleSubmit(e)} className=" mt-5 w-full flex-1">
        <div className="w-full flex flex-wrap -m-2">
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              New Password
            </label>
            <input
              value={values.password}
              onChange={(e) => handleChange(e)}
              name="password"
              onFocus={(e) => handleFocus(e)}
              type="password"
              placeholder="Enter your new password"
              className={`${
                errors?.password ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.password && (
              <p className="text-error mt-3">{errors.password}</p>
            )}
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Comfirm Password
            </label>
            <input
              value={values.cfPassword}
              onChange={(e) => handleChange(e)}
              name="cfPassword"
              onFocus={(e) => handleFocus(e)}
              type="password"
              placeholder="Comfirm your password"
              className={`${
                errors?.cfPassword ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.cfPassword && (
              <p className="text-error mt-3">{errors.cfPassword}</p>
            )}
          </div>
          <div className="w-full flex flex-col p-2">
            <Mess type={mess.type} value={mess.value} />
            {loading ? (
              <button
                type="button"
                className="btn btn-primary btn-loading w-full"
              >
                <TailSpin height={30} width={30} color="#ccc" />
              </button>
            ) : (
              <button className="btn btn-primary w-full">Reset password</button>
            )}
            {mess.type && (
              <Link
                to={"/authen/signin"}
                className="text-primary hover:opacity-75 mt-5"
              >
                Sign in now
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPw;
