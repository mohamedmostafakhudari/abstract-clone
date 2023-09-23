import React from "react";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { FaArrowRight } from "react-icons/fa";

const SearchForm = () => {
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
      className="bg-neutral py-24 pb-28 text-center font-semibold"
    >
      <Container className={`flex flex-col gap-10 md:max-w-screen-md`}>
        <div className="whitespace-nowrap text-4xl tracking-tighter sm:text-5xl md:text-6xl">
          How can we help?
        </div>
        <SearchInput
          className={`peer w-full py-5 duration-200 ease-in-out hover:border-primary`}
          icon={<FaArrowRight />}
          searchTerm={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleSearch}
          onKeyDown={handleSearch}
        />
      </Container>
    </form>
  );
};

export default SearchForm;
