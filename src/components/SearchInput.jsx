import clsx from "clsx";
import React from "react";

const SearchInput = ({ className }) => {
  return (
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
  );
};

export default SearchInput;
