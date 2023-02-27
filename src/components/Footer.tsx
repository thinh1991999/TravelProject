import React from "react";
import { footerData } from "../share/data";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container m-auto row">
        {footerData.map((vl, idx) => {
          const { title, childs } = vl;
          return (
            <div className="w-1/4 p-2" key={idx}>
              <div className="">
                <h4>{title}</h4>
                <ul className="mt-5">
                  {childs.map((child, idxC) => {
                    return (
                      <li key={idxC} className="py-2">
                        <a href=""> {child.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </footer>
  );
};

export default Footer;
