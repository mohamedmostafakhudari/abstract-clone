import React from "react";
import clsx from "clsx";

const Menu = ({ menuOpen, className }) => {
  return (
    <div
      className={clsx(
        "flex justify-center border-t-[1px] border-white/60 bg-black text-white",
        !menuOpen && "pointer-events-none opacity-0",
        className,
      )}
    >
      <div className="flex flex-col py-8 text-center text-2xl">
        <a
          href="#"
          className="block px-12 py-6 duration-300 ease-in-out hover:text-white/60"
        >
          Submit a request
        </a>
        <a
          href="#"
          className="block border-t-[1px] border-white/60 px-12 py-6 duration-300 ease-in-out hover:text-white/60"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Menu;
