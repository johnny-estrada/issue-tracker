import { useState, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchTaskQuery } from "../../../state/redux/slices/tasksApiSlice";

interface Task {
  id: number;
  name: string;
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { data: searchResults = [], isLoading } = useSearchTaskQuery(search);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setSearch(search);
    setSearch("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <div className="flex mt-auto rounded-md z-10">
        <form>
          <div className="relative z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
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
              className="hidden lg:w-80 rounded-full py-4 pl-11 bg-white text-base leading-6 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-sky-600 outline-none lg:block shadow-sm"
              placeholder="Search"
              value={search}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            {search && searchResults.length === 0 ? (
              <ul className="absolute flex justify-center items-center top-[57px] ring-1 ring-gray-200 rounded shadow-sm w-80 h-16 bg-white px-4 py-2">
                <li>No results found</li>
              </ul>
            ) : search && !isLoading ? (
              <ul className="absolute top-[57px] ring-1 ring-gray-200 rounded shadow-sm w-80 bg-white">
                {searchResults
                  .filter(
                    (task: Task) =>
                      task.name.toLowerCase().includes(search.toLowerCase()) ||
                      task.name.toUpperCase().includes(search.toUpperCase()) ||
                      task.id.toString().includes(search),
                  )
                  .map((task: Task) => (
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
        {window.location.href.split("/")[3] === "tasks" ? (
          <>
            <Link
              to={`/tasks/create`}
              className="hidden lg:ml-3 lg:flex items-center justify-center lg:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-sm lg:text-base text-white shadow-sm z-10 w-60"
            >
              Create tasks
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/projects/create`}
              className="hidden lg:ml-3 lg:flex items-center justify-center lg:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-sm lg:text-base text-white shadow-sm z-10 w-60"
            >
              Create project
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
