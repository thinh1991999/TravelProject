import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";
import { useAppSelector } from "../store/hook";

const Profile = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.global.user);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);
  if (!user) return <></>;
  return (
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-full md:w-1/3">
        <Left />
      </div>
      <div className="p-2 w-full md:w-2/3">
        <Right />
      </div>
    </div>
  );
};

export default Profile;
