import React from "react";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <button className="btn btn-black">
        <Link to={"/become-a-host/about-your-place"}>Create Listing</Link>
      </button>
    </div>
  );
};

export default Container;
