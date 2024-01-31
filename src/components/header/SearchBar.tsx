import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.search(search);
    setSearch("");
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <form className="mt-auto rounded-md z-10">
      <label htmlFor="desktop-search" className="sr-only">
        Search
      </label>

      <div className="flex">
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="hidden lg:inline h-5 w-5 text-slate-500"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="desktop-search"
            id="desktop-search"
            className="hidden lg:w-72 rounded-full py-1.5 pl-10 bg-white text-sm leading-6 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate--500 focus:ring-2 focus:ring-inset focus:ring-orange-500 outline-none lg:block shadow-sm h-12"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
        <button
          type="button"
          className="hidden lg:ml-3 lg:block lg:py-3 rounded-md bg-orange-500 hover:bg-orange-400 px-10 text-sm text-white shadow-sm z-10"
        >
          + Create
        </button>

        {/* Mobile create button */}
        <button
          type="button"
          className="lg:hidden fixed bottom-28 right-8 bg-orange-500 w-10 h-10 rounded-full drop-shadow-lg text-white text-3xl flex justify-center hover:drop-shadow-2xl hover:bg-orange-400 cursor-pointer z-10"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
