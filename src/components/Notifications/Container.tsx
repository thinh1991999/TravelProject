import React, { useEffect } from "react";
import io from "socket.io-client";
import { useAppSelector } from "../../store/hook";

const Container = () => {
  const user = useAppSelector((state) => state.global.user);

  useEffect(() => {
    if (!user) return;
    const newSocket = io("http://localhost:8000/notifications");
    newSocket.emit("join_room", user._id);
    newSocket.on("like_notifications", (newVl) => {
      console.log(newVl);
      //   setData((prev) => {
      //     return [newReview, ...prev];
      //   });
    });
    return () => {
      newSocket.close();
    };
  }, [user]);
  return <div>Container</div>;
};

export default Container;
