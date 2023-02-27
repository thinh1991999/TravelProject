import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children?: ReactElement }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[140px] pb-16 container m-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
