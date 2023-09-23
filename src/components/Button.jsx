import { cva } from "class-variance-authority";
import React from "react";
const button = cva("text-white rounded-md duration-200 ease-in-out", {
  variants: {
    intent: {
      primary: "bg-primary hover:bg-white hover:text-black",
      secondary: "bg-transparent border",
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },

  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({ intent, size, type, className, children, ...props }) => {
  if (type === "link") {
    return (
      <a className={button({ intent, size, className })} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={button({ intent, size, className })} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
