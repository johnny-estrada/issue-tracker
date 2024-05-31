import { useState, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useSearchTaskQuery } from "../../../state/redux/slices/tasksApiSlice";
import { BellIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

interface Task {
  id: number;
  name: string;
}

const MobileBar = () => {
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
      {/* Mobile Top Nav */}
      <div className="lg:hidden flex justify-end items-center gap-4 text-gray-900 bg-gray-200 px-6 pt-3 pb-2">
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
        {search && searchResults.length === 0 ? (
          <p>No results found</p>
        ) : search && !isLoading ? (
          <ul className="absolute top-[70px] left-0 ring-1 ring-gray-100 rounded shadow-sm w-full bg-white">
            {searchResults
              .filter(
                (task: Task) =>
                  task.name.toLowerCase().includes(search.toLowerCase()) ||
                  task.name.toUpperCase().includes(search.toUpperCase()) ||
                  task.id.toString().includes(search),
              )
              .map((task: Task) => (
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
        <button>
          <MagnifyingGlassIcon className="w-6 h-6 lg:hidden" />
        </button>
        <Link to="/notifications">
          <BellIcon className="w-6 h-6 lg:hidden" />
        </Link>
      </div>
      {/* Mobile create button */}
      {window.location.href.split("/")[3] === "settings" ||
      window.location.href.split("/")[4] === "create" ||
      window.location.href.split("/")[4] === "edit" ||
      window.location.href.split("/")[3] === "notifications" ? (
        <></>
      ) : window.location.href.split("/")[3] === "tasks" ? (
        <>
          {" "}
          <Link
            to={`/tasks/create`}
            className="lg:hidden fixed bottom-[85px] right-6 bg-orange-500 w-[42px] h-[42px] rounded-full drop-shadow-lg text-white text-2xl hover:drop-shadow-2xl hover:bg-orange-400 z-10 flex justify-center items-center"
          >
            <PlusIcon className="w-5 h-5" />
          </Link>
        </>
      ) : (
        <>
          <Link
            to={`/projects/create`}
            className="lg:hidden fixed bottom-[85px] right-6 bg-orange-500 w-[42px] h-[42px] rounded-full drop-shadow-lg text-white text-2xl hover:drop-shadow-2xl hover:bg-orange-400 z-10 flex justify-center items-center"
          >
            <PlusIcon className="w-5 h-5" />
          </Link>
        </>
      )}
    </>
  );
};

export default MobileBar;
