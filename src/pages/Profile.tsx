import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";
import { useAppSelector } from "../store/hook";
import LoadingSpinner from "../components/LoadingSpinner";
import httpService from "../services/httpService";
import { User } from "../interfaces/global";

const Profile = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.global.user);
  const token = useAppSelector((state) => state.global.token);
  const [data,setData]=useState<User>();
  const [loading,setLoading]=useState(true);
  const [isReset,setIsReset]=useState(true);

  useEffect(() => {
    if(!isReset)return;
    if (!token) {
      navigate("/");
    } else {
      setLoading(true);
      httpService.getProfile(token).then((res) => {
        setLoading(false);
        setData(res.data);
        setIsReset(false);
      });
    }
  }, [token, isReset]);
  
  if (loading) return (
    <div className="p-[200px] flex justify-center items-center">
      <LoadingSpinner/>
    </div>
  )
  return (
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-full md:w-1/3">
        <Left data={data} setIsReset={setIsReset} />
      </div>
      <div className="p-2 w-full md:w-2/3">
        <Right data={data} setIsReset={setIsReset} />
      </div>
    </div>
  );
};

export default Profile;
