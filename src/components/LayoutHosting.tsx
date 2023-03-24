import React, { ReactElement } from "react";
import Footer from "./Footer";
import HeaderHosting from "./HeaderHosting";

const LayoutHosting = ({
  children,
  showFooter = true,
}: {
  children: ReactElement;
  showFooter?: boolean;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderHosting />
      <main className="container m-auto pt-[100px] flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default LayoutHosting;
