import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";

const Layout = ({ children }) => {
  return (
    <div
      id="app"
      className="min-h-screen select-none bg-white font-body text-base"
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
