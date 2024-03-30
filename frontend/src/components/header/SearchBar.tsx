import { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { BellIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { data: searchResults = [], isLoading } = useSearchTaskQuery(search);

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
    <>
      {/* Mobile Top Nav */}
      {/* <div className="bg-gray-100 m-auto w-1/2"> */}
      <div className="lg:hidden flex items-center gap-4 text-gray-900 justify-end z-10 mb-2">
        <input
          type="text"
          name="mobile-search"
          id="mobile-search"
          className="hidden absolute top-5 left-0 w-full rounded-full py-1.5 pl-10 bg-white text-sm leading-6 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 outline-none lg:block shadow-sm h-12"
          placeholder="Search"
          value={search}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        {searchResults.length === 0 ? (
          <p>No results found</p>
        ) : search && !isLoading ? (
          <ul className="absolute top-[70px] left-0 ring-1 ring-gray-100 rounded shadow-sm w-full bg-white">
            {searchResults
              .filter(
                (task: object) =>
                  task.name.toLowerCase().includes(search.toLowerCase()) ||
                  task.name.toUpperCase().includes(search.toUpperCase()) ||
                  task.id.toString().includes(search),
              )
              .map((task: object) => (
                <li key={task.id} className="hover:bg-gray-50 p-4">
                  <Link className="text-sm" to={`/tasks/${task.id}`}>
                    <p className="line-clamp-1">
                      <span className="font-semibold">ID TK-{task.id}</span>{" "}
                      {task.name}{" "}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        ) : null}
        <button className="">
          <MagnifyingGlassIcon className="w-5 h-5 lg:hidden" />
        </button>
        <Link to="/notifications">
          <BellIcon className="w-5 h-5 lg:hidden" />
        </Link>
      </div>

      <div className="hidden lg:flex mt-auto rounded-md z-10">
        <form>
          <div className="relative z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="hidden lg:inline h-5 w-5 text-slate-500"
                aria-hidden="true"
              />
            </div>
            <label htmlFor="desktop-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              name="desktop-search"
              id="desktop-search"
              className="hidden lg:w-72 rounded-full py-1.5 pl-10 bg-white text-sm leading-6 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 outline-none lg:block shadow-sm h-12"
              placeholder="Search"
              value={search}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            {searchResults.length === 0 ? (
              <p>No results found</p>
            ) : search && !isLoading ? (
              <ul className="absolute top-[50px] ring-1 ring-gray-100 rounded shadow-sm w-72 bg-white">
                {searchResults
                  .filter(
                    (task: object) =>
                      task.name.toLowerCase().includes(search.toLowerCase()) ||
                      task.name.toUpperCase().includes(search.toUpperCase()) ||
                      task.id.toString().includes(search),
                  )
                  .map((task: object) => (
                    <li key={task.id} className="hover:bg-gray-100 p-4">
                      <Link className="text-sm" to={`/tasks/${task.id}`}>
                        <p className="line-clamp-1">
                          <span className="font-semibold">ID TK-{task.id}</span>{" "}
                          {task.name}{" "}
                        </p>
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : null}
          </div>
        </form>
        <Link
          to={`/projects/create-project`}
          className="hidden lg:ml-3 lg:flex items-center justify-center lg:py-3 rounded-md bg-orange-500 hover:bg-orange-400 px-10 text-sm text-white shadow-sm z-10 w-44 h-12"
        >
          Create project
        </Link>

        {/* Mobile create button */}
        <Link
          to={`/projects/create-project`}
          className="lg:hidden fixed bottom-20 right-3 bg-orange-500 w-10 h-10 rounded-full drop-shadow-lg text-white text-3xl hover:drop-shadow-2xl hover:bg-orange-400 z-10 flex justify-center items-center"
        >
          +
        </Link>
      </div>
    </>
  );
};

export default SearchBar;
