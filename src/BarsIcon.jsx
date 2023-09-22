import React from "react";
import clsx from "clsx";
const BarsIcon = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex w-6 cursor-pointer flex-col gap-[6px]"
    >
      <span
        className={clsx(
          "block h-0.5 bg-white duration-300 ease-in-out",
          menuOpen && "translate-y-3 -rotate-45",
        )}
      ></span>
      <span
        className={clsx(
          "block h-0.5 bg-white duration-300 ease-in-out",
          menuOpen && "opacity-0",
        )}
      ></span>
      <span
        className={clsx(
          "block h-0.5 bg-white duration-300 ease-in-out",
          menuOpen && "-translate-y-1 rotate-45",
        )}
      ></span>
    </div>
  );
};

export default BarsIcon;
