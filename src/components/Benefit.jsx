import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "src/components/Link";

const Benefit = ({ title, content, imgSrc }) => {
  return (
    <div className="flex justify-start gap-6">
      <div className="max-w-[70px]">
        <img src={imgSrc} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <h4 className="font-bold">{title}</h4>
          <p>{content}</p>
        </div>
        <Link
          href="#"
          icon={<HiArrowLongRight className="" />}
          className="flex w-fit items-center gap-2"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Benefit;
