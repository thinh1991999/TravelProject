import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import User from "./User";

const navs = [
  {
    title: "Today",
    link: "/hosting",
  },
  {
    title: "Reservations",
    link: "/hosting/reservation",
  },
  {
    title: "Listings",
    link: "/hosting/listing",
  },
];

const HeaderHosting = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[100px]">
      <div className="h-full flex justify-between items-center container m-auto">
        <Logo showText={false} />
        <ul className="flex justify-center items-center">
          {navs.map((nav) => {
            return (
              <li key={nav.title}>
                <Link to={nav.link} className="py-3 px-5 btn btn-trans">
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="">
          <User />
        </div>
      </div>
    </header>
  );
};

export default HeaderHosting;
