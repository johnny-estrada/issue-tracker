import SearchBar from "./SearchBar";
import Search from "./Search";
import { Link } from "react-router-dom";

import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

export default function Header({ children }) {
  const [title, display] = children;

  function search(text) {
    alert(text);
  }

  return (
    <>
      <header className="py-4 lg:py-0 px-4 lg:px-14 lg:pt-12 z-10 bg-gray-100">
        {/* Mobile Top Nav */}
        <div className="flex gap-4 text-gray-900 justify-end z-10 mb-2">
          <button className="">
            <MagnifyingGlassIcon className="w-5 h-5 lg:hidden" />
          </button>
          <Link to="/notifications">
            <BellIcon className="w-5 h-5 lg:hidden" />
          </Link>
        </div>

        {/* Top header section */}
        <div className="flex justify-between mb-3 lg:mb-5">
          {/* <HeaderTitle /> */}
          {title}

          {/* Search input and button */}
          <SearchBar search={search} />
          {/* <Search /> */}
        </div>
        <div className="lg:mb-5">{display}</div>
      </header>
    </>
  );
}
