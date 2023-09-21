import React from "react";
import Container from "./Container";
import LogoIcon from "./LogoIcon";
import BarsIcon from "./BarsIcon";
import Menu from "./Menu";
import { FaSearch } from "react-icons/fa";
import SearchForm from "./SearchForm";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  return (
    <nav id="nav" className="relative bg-black py-8 text-2xl text-white">
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="mr-3 flex items-center gap-2 border-r-2 pr-3 duration-200 ease-in-out hover:text-white/80"
          >
            <LogoIcon />
            <span className="block font-semibold">Abstract</span>
          </a>
          <a className="cursor-pointer tracking-tight hover:underline">
            Help Center
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaSearch
            onClick={() => setSearchOpen(true)}
            className="cursor-pointer duration-200 ease-in-out hover:scale-[120%]"
          />
          <BarsIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </Container>
      <Menu
        menuOpen={menuOpen}
        className={`absolute left-0 right-0 top-full`}
      />
      <SearchForm
        type="nav"
        onClose={() => setSearchOpen(false)}
        className={clsx(
          `absolute inset-0 left-0 top-0 origin-center duration-300 ease-in-out`,
          searchOpen
            ? "[transform:rotateX(0deg)]"
            : "[transform:rotateX(-90deg)]",
        )}
      />
    </nav>
  );
};

export default Navbar;
