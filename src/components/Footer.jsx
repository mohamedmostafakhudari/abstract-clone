import React from "react";
import Container from "src/components/Container";
import FooterItem from "src/components/FooterItem";
import LogoIcon from "src/components/LogoIcon";
import { footerItems } from "src/data";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black py-12 text-white">
      <Container className={`flex flex-col gap-6 md:flex-row`}>
        <div className="mr-8 grid flex-1 grid-cols-1 justify-start gap-4 md:min-w-[565px] md:grid-cols-2 xl:grid-cols-4 2xl:justify-between">
          {footerItems.map((footerItem, i) => (
            <FooterItem
              key={i}
              title={footerItem.title}
              links={footerItem.links}
              subItem={footerItem.subItem}
            />
          ))}
        </div>
        <div className="flex flex-col justify-end text-xs">
          <LogoIcon />
          <div className="mt-4">
            <p>&copy; Copyright 2023</p>
            <p className="">
              Abstract Studio Design, inc. Cloned by Mohamed Mostafa
            </p>
            <p>All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
