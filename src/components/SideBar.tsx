import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import httpService from "../services/httpService";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setToken, setUser } from "../store/slices/globalSlice";

const links = [
  {
    title: "Home",
    path: "/",
  },
];

const SideBar = ({
  isShow,
  setShow,
}: {
  isShow: boolean;
  setShow: Function;
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.global.user);
  const token = useAppSelector((state) => state.global.token);
  const handleLogout = () => {
    if (token === null) return;
    httpService
      .logout(token)
      .then((res) => {
        dispatch(setUser(null));
        dispatch(setToken(null));
      })
      .catch(() => {
        dispatch(setUser(null));
        dispatch(setToken(null));
      });
  };

  return (
    <div
      className={`${
        isShow ? "w-full" : "w-0"
      } fixed top-0 left-0 bottom-0 right-0 z-[99999] transition-all ease-linear duration-300 overflow-hidden`}
    >
      <div className="w-full h-full relative">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"
          onClick={() => setShow(false)}
        ></div>
        <div className="h-full w-[90%] bg-white relative py-10 pl-5">
          <Logo />
          <ul className="mt-5">
            {links.map((link, idx) => {
              return (
                <NavLink
                  to={link.path}
                  key={idx}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-pink-500" : ""
                    } py-3 border-r-4  block hover:opacity-50`
                  }
                >
                  <span className="font-semibold">{link.title}</span>
                </NavLink>
              );
            })}

            {user ? (
              <>
                <NavLink
                  to={"/profile"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-pink-500" : ""
                    } py-3 border-r-4  block hover:opacity-50`
                  }
                >
                  <span className="font-semibold">Profile</span>
                </NavLink>
                {/* <li>
                <Notifications />
              </li> */}
                <li onClick={handleLogout}>
                  <span className="block  py-3  font-semibold text-start cursor-pointer hover:opacity-50">
                    Log out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to={"/authen/signup"}
                    className="block  py-3  font-semibold text-start cursor-pointer hover:opacity-50"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/authen/signin"}
                    className="block  py-3   font-semibold text-start cursor-pointer hover:opacity-50"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
