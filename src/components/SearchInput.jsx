import clsx from "clsx";
import React from "react";

const SearchInput = ({ className, icon }) => {
  return (
    <div className="relative">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className={clsx(
          "rounded-md border px-4 py-3 focus:outline-none",
          className,
        )}
        autoComplete="off"
      />
      {icon && (
        <button className="absolute right-4 top-1/2 -mr-4 -translate-y-1/2 rounded-md px-4 py-5 duration-200 ease-in-out hover:text-primary peer-hover:text-primary">
          {icon}
        </button>
      )}
    </div>
  );
};

export default SearchInput;
