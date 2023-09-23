import React from "react";

const FooterItem = ({ title, links }) => {
  return (
    <div className="space-y-3">
      <h3 className="font-bold">{title}</h3>
      <ul className="text-lg">
        {/* {links.map((link, i) => {
          return (
            <li key={i}>
              <a href="#">{link}</a>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default FooterItem;
