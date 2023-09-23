import React from "react";
import Link from "src/components/Link";

const FooterItem = ({ title, links, subItem }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-bold">{title}</h3>
      <ul className="text-lg/6">
        {links.map((link, i) => {
          return (
            <li key={i}>
              <Link intent="secondary" size="small" href={link.href}>
                {link.name}
              </Link>
            </li>
          );
        })}
        {subItem ? (
          <li className="mt-8">
            <div>
              <strong>{subItem.title}</strong>
            </div>
            <a href="#">{subItem.link}</a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default FooterItem;
