import clsx from "clsx";
import React from "react";
const linkVariant = {
  primary:
    "bg-primary duration-200 ease-in-out hover:bg-white hover:text-black",
  outline: "bg-transparent border border-white",
};
const linkType = {
  button: "block rounded-md p-2 px-6",
};

const Link = ({ type, variant, href, className, children }) => {
  return type === "button" ? (
    <a
      href={href}
      className={clsx(linkType[type], linkVariant[variant], className)}
    >
      {children}
    </a>
  ) : null;
};

export default Link;
