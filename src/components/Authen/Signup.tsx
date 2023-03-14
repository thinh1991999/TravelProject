import React, { useState, useRef } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { SignupITF } from "../../interfaces/global";
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
    message: "This field is a email",
  },
  {
    field: "firstName",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "lastName",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "address",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "phoneNumber",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
  {
    field: "phoneNumber",
    method: "isMobilePhone",
    args: [""],
    validWhen: true,
    message: "This field is a mobile phone",
  },
  {
    field: "description",
    method: "isEmpty",
    validWhen: false,
    message: "This field is required",
  },
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

const Signup = () => {
  const [values, setValues] = useState<
    SignupITF & {
      cfPassword?: string;
    }
  >({
    email: "",
    password: "",
    cfPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    description: "",
    phoneNumber: "",
    gender: "male",
  });
  const [errors, setErrors] = useState<
    SignupITF & {
      cfPassword?: string;
    }
  >({});
  const [loading, setLoading] = useState<boolean>(false);
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });
  const validator = useRef(new Validator(rules)).current;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validator.validate(JSON.parse(JSON.stringify(values))));
    if (validator.isValid && comparePw()) {
      setLoading(true);
      httpService
        .signup(values)
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

  const hanldeClear = () => {
    setValues({
      email: "",
      password: "",
      cfPassword: "",
      firstName: "",
      lastName: "",
      address: "",
      description: "",
      phoneNumber: "",
      gender: "male",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
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
    <div className="max-h-screen flex flex-col px-5 py-5 bg-white rounded-md shadow-md w-[500px]">
      <h3>Sign up</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" mt-5 w-full flex-1 overflow-y-auto"
      >
        <div className="w-full flex flex-wrap -m-2">
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Email
            </label>
            <input
              value={values.email}
              onChange={(e) => handleChange(e)}
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
          <div className="w-1/2 flex flex-col p-2">
            <label htmlFor="" className="label-title">
              First name
            </label>
            <input
              value={values.firstName}
              onChange={handleChange}
              name="firstName"
              onFocus={(e) => handleFocus(e)}
              type="text"
              placeholder="Enter your first name"
              className={`${
                errors?.firstName ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.firstName && (
              <p className="text-error mt-3">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2 flex flex-col p-2">
            <label htmlFor="" className="label-title">
              last name
            </label>
            <input
              value={values.lastName}
              onChange={(e) => handleChange(e)}
              name="lastName"
              onFocus={(e) => handleFocus(e)}
              type="text"
              placeholder="Enter your last name"
              className={`${
                errors?.lastName ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.lastName && (
              <p className="text-error mt-3">{errors.lastName}</p>
            )}
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Address
            </label>
            <input
              value={values.address}
              onChange={(e) => handleChange(e)}
              name="address"
              onFocus={(e) => handleFocus(e)}
              placeholder="Enter your address"
              className={`${
                errors?.address ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.address && (
              <p className="text-error mt-3">{errors.address}</p>
            )}
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Phone number
            </label>
            <input
              value={values.phoneNumber}
              onChange={(e) => handleChange(e)}
              name="phoneNumber"
              onFocus={(e) => handleFocus(e)}
              placeholder="Enter your phone number"
              className={`${
                errors?.phoneNumber ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            />
            {errors?.phoneNumber && (
              <p className="text-error mt-3">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="w-full flex  p-2">
            <label className="label-title">Gender</label>
            <div className="flex ml-10">
              <label htmlFor="male" className="ml-5 mr-3 cursor-pointer">
                Male
              </label>
              <input
                type="radio"
                id="male"
                name="gender"
                className="cursor-pointer"
                value="male"
                checked={values.gender === "male"}
                onChange={(e) => handleCheckGender(e)}
              />
              <label htmlFor="female" className="ml-5 mr-3 cursor-pointer">
                Female
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                className="cursor-pointer"
                value="female"
                checked={values.gender === "female"}
                onChange={(e) => handleCheckGender(e)}
              />
              <label htmlFor="other" className="ml-5 mr-3 cursor-pointer">
                Other
              </label>
              <input
                type="radio"
                id="other"
                name="gender"
                className="cursor-pointer"
                value="other"
                checked={values.gender === "other"}
                onChange={(e) => handleCheckGender(e)}
              />
            </div>
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Description
            </label>
            <textarea
              value={values.description}
              onChange={(e) => handleChange(e)}
              name="description"
              onFocus={(e) => handleFocus(e)}
              placeholder="Description your self"
              className={`${
                errors?.description ? "input-err" : ""
              } py-2 px-3 border border-color rounded-sm mt-1 `}
            ></textarea>
            {errors?.description && (
              <p className="text-error mt-3">{errors.description}</p>
            )}
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="" className="label-title">
              Password
            </label>
            <input
              value={values.password}
              onChange={(e) => handleChange(e)}
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
              <button className="btn btn-primary w-full">Sign up</button>
            )}
          </div>
        </div>

        <div className="flex flex-col my-3">
          <p className="text-sm">
            Aready have an account?{" "}
            <Link
              to={"/authen/signin"}
              className="text-primary hover:opacity-75"
            >
              Sign in now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
