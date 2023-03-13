import React, { ReactElement } from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import HeaderSub from "./HeaderSub";

const Layout = ({
  children,
  showHeadSub = true,
}: {
  children?: ReactElement;
  showHeadSub?: boolean;
}) => {
  return (
    <div className="min-h-screen">
      <Header />
      {showHeadSub && <HeaderSub />}
      <main
        className={`${
          showHeadSub ? "pt-[200px]" : "pt-[120px]"
        } pb-16 container m-auto`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
