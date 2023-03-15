import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Logo from "../components/Logo";
import { useAppSelector } from "../store/hook";

const Auth = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.global.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-no-repeat bg-cover flex justify-center items-center "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {children}
      <div className="fixed left-5 top-5">
        <Logo />
      </div>
    </div>
  );
};

export default Auth;
