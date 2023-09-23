import React from "react";
import Container from "src/components/Container";
import FooterItem from "src/components/FooterItem";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      <Container>
        <div>
          <FooterItem />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
