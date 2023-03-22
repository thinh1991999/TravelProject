import React, { useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import httpService from "../../services/httpService";
import Validator from "../../share/validator";
import { useAppDispatch } from "../../store/hook";
import { setToken, setUser } from "../../store/slices/globalSlice";
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
  {
    field: "password",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
];

const Signin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });
  const validator = useRef(new Validator(rules)).current;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(
      validator.validate({
        email,
        password,
      })
    );
    if (validator.isValid) {
      setLoading(true);
      httpService
        .signin({
          email,
          password,
        })
        .then((res) => {
          const { user, token } = res.data;
          dispatch(setUser(user));
          dispatch(setToken(token));
          location.state?.from ? navigate(location.state.from) : navigate("/");
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setMess({
      type: true,
      value: "",
    });
  };

  return (
    <div className="px-5 py-5 bg-white rounded-md shadow-md sm:w-[500px] sm:h-auto w-full h-full">
      <h3 className="sm:mt-0 mt-10">Sign in</h3>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-5">
        <div className="flex flex-col my-3">
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            onFocus={(e) => handleFocus(e)}
            type="text"
            placeholder="Enter your email"
            className={`${
              errors?.email ? "input-err" : ""
            } py-2 px-3 border border-color rounded-sm mt-1 `}
          />
          {errors?.email && <p className="text-error mt-3">{errors.email}</p>}
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            onFocus={(e) => handleFocus(e)}
            type="password"
            placeholder="Enter your password"
            className={`${
              errors?.password ? "input-err" : ""
            } py-2 px-3 border border-color rounded-sm mt-1 `}
          />
          {errors?.password && (
            <p className="text-error mt-3">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col my-3">
          <Mess type={mess.type} value={mess.value} />
          {loading ? (
            <button
              type="button"
              className="btn btn-primary btn-loading w-full"
            >
              <TailSpin height={30} width={30} color="#ccc" />
            </button>
          ) : (
            <button className="btn btn-primary w-full">Sign in</button>
          )}
        </div>
        <div className="flex flex-col my-3">
          <p className="text-sm">
            Don't have account?{" "}
            <Link
              to={"/authen/signup"}
              className="text-primary hover:opacity-75"
            >
              Sign up now
            </Link>
          </p>
          <Link
            className="text-sm text-red-700 hover:opacity-70"
            to={"/authen/forgot-password"}
          >
            Forgot password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
