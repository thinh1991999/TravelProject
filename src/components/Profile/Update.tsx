import React, { useState, useRef, useLayoutEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { SignupITF, UpdateITF, User } from "../../interfaces/global";
import httpService from "../../services/httpService";
import Validator from "../../share/validator";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUser } from "../../store/slices/globalSlice";
import Mess from "../Mess";
import { toast } from "react-toastify";

const rules = [
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
];

const Update = ({
  data,
  setIsReset,
  handleShow,
}: {
  data?: User;
  setIsReset: Function;
  handleShow:Function
}) => {
  const disptach = useAppDispatch();

  const token = useAppSelector((state) => state.global.token);

  const [values, setValues] = useState<UpdateITF>({
    firstName: "",
    lastName: "",
    address: "",
    description: "",
    phoneNumber: "",
    gender: "male",
  });
  const [errors, setErrors] = useState<UpdateITF>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [mess, setMess] = useState({
    type: true,
    value: "",
  });
  const validator = useRef(new Validator(rules)).current;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setErrors(validator.validate(JSON.parse(JSON.stringify(values))));
    if (validator.isValid) {
      setLoading(true);
      httpService
        .updateProfile(values, token)
        .then((res) => {
          const { message, user } = res.data;
          disptach(setUser(user));
          toast.success(message);
          setLoading(false);
          setIsReset(true);
          handleShow(false);
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

  useLayoutEffect(() => {
    if (!data) return;
    const { firstName, lastName, address, description, phoneNumber, gender } =
      data;
    setValues({
      address,
      description,
      firstName,
      lastName,
      gender,
      phoneNumber,
    });
  }, [data]);

  return (
    <div className="max-h-screen flex flex-col md:p-5 p-2 bg-white rounded-md shadow-md md:w-[500px]">
      <h3>Update your profile</h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" mt-5 w-full flex-1 overflow-y-auto"
      >
        <div className="w-full flex flex-wrap -m-2">
          <div className="w-full md:w-1/2 flex flex-col p-2">
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
          <div className="w-full md:w-1/2 flex flex-col p-2">
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
          <div className="w-full flex flex-wrap  p-2">
            <label className="label-title">Gender</label>
            <div className="flex justify-around flex-1">
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
            <Mess type={mess.type} value={mess.value} />
            {loading ? (
              <button
                type="button"
                className="btn btn-primary btn-loading w-full"
              >
                <TailSpin height={30} width={30} color="#ccc" />
              </button>
            ) : (
              <button className="btn btn-primary w-full">Update</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
