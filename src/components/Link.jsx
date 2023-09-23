import clsx from "clsx";
import { cva, cx } from "class-variance-authority";
import React from "react";
const linkVariant = {
  primary: "",
  outline: "bg-transparent border border-white",
};
const linkType = {
  button:
    "bg-primary block rounded-md p-2 px-6 duration-200 ease-in-out hover:bg-white hover:text-black",
};

const link = cva(["cursor-pointer", "whitespace-nowrap"], {
  variants: {
    intent: {
      primary: ["text-primary"],
      secondary: ["text-white"],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-xl"],
    },
  },

  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
const Link = ({ intent, size, icon, className, children, ...props }) => {
  return (
    <a
      className={cx(link({ intent, size, className }), "group relative")}
      {...props}
    >
      {/* underline */}
      <div className="border-t-transparent group-hover:border-t-inherit absolute left-0 right-0 top-full h-[1px] -translate-y-[500%] border-t duration-200 ease-in-out"></div>
      {children} {icon && icon}
    </a>
  );
};

export default Link;
