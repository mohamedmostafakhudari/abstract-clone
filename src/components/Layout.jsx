import React from "react";
import Navbar from "src/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div
      id="app"
      className="min-h-screen select-none bg-white font-body text-base"
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
