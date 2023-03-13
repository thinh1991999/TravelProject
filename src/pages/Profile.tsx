import React from "react";
import Left from "../components/Profile/Left";
import Right from "../components/Profile/Right";

const Profile = () => {
  return (
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/3">
        <Left />
      </div>
      <div className="p-2 w-2/3">
        <Right />
      </div>
    </div>
  );
};

export default Profile;
