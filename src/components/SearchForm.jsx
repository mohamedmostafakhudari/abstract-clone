import React from "react";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { FaArrowRight } from "react-icons/fa";

const SearchForm = () => {
  return (
    <form
      action="/"
      className="bg-neutral py-24 pb-28 text-center font-semibold"
    >
      <Container className={`flex flex-col gap-10 md:max-w-screen-md`}>
        <div className="whitespace-nowrap text-4xl tracking-tighter sm:text-6xl md:text-7xl">
          How can we help?
        </div>
        <SearchInput
          className={`peer w-full py-5 duration-200 ease-in-out hover:border-primary`}
          icon={<FaArrowRight />}
        />
      </Container>
    </form>
  );
};

export default SearchForm;
