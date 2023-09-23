import React from "react";
import Container from "./Container";
import { GrFormClose } from "react-icons/gr";
import clsx from "clsx";
import SearchInput from "./SearchInput";

const NavSearchForm = ({ type, onClose, className }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  function handleSearch(e) {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      e.preventDefault();
      console.log(searchTerm);
      setSearchTerm("");
    }
  }
  return (
    <form
      action="/"
      method="GET"
      className={clsx("bg-white text-base text-black", className)}
    >
      <Container className={`flex items-center py-5`}>
        <SearchInput
          className="flex-1"
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleSearch}
          onKeyDown={handleSearch}
        />
        <div onClick={onClose} className="group cursor-pointer p-4">
          <GrFormClose className="min-w-[16px] shrink-0 text-2xl duration-200 ease-in-out group-hover:scale-125" />
        </div>
      </Container>
    </form>
  );
};

export default NavSearchForm;
