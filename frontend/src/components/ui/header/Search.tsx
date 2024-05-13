import { useState, SyntheticEvent, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = (props: any) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    props.search(search);
    setSearch("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
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
      </div>
    </form>
  );
};

export default SearchBar;
