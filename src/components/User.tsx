import { useEffect } from "react";
import { BsList } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import httpService from "../services/httpService";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setToken, setUser } from "../store/slices/globalSlice";
import Drop from "./Drop";

const Notifications = () => {
  const user = useAppSelector((state) => state.global.user);

  useEffect(() => {
    if (!user) return;
    const newSocket = io("http://localhost:8000/notifications");
    newSocket.emit("join_room", user._id);
    return () => {
      newSocket.close();
    };
  }, [user]);

  return (
    <Link
      to={"/notifications"}
      className="block py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300"
    >
      Notifications
    </Link>
  );
};

const User = () => {
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
    <div className="relative">
      <Drop
        configs={{
          width: "300px",
          top: "calc(100% + 10px)",
          right: "0",
        }}
        target={
          <button className="flex items-center btn btn-trans rounded-full border border-color ">
            <BsList className="mr-3" />
            <div className="w-[30px] h-[30px] bg-gray-700 flex items-center justify-center text-white rounded-full">
              <FaUserAlt />
            </div>
          </button>
        }
      >
        <ul>
          {user ? (
            <>
              <li>
                <Link
                  to={"/profile"}
                  className="block py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300"
                >
                  Profile
                </Link>
              </li>
              {/* <li>
                <Notifications />
              </li> */}
              <li onClick={handleLogout}>
                <span className="block py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300">
                  Log out
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/authen/signup"}
                  className="block py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  to={"/authen/signin"}
                  className="block py-2 px-3 font-semibold text-start cursor-pointer hover:bg-gray-300"
                >
                  Sign in
                </Link>
              </li>
            </>
          )}
        </ul>
      </Drop>
    </div>
  );
};

export default User;
