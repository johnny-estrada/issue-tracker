import SearchBar from "../components/ui/SearchBar";

import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";

export default function Header({ children }) {
  const [title, display, other] = children;

  function search(text) {
    alert(text);
  }

  return (
    <>
      <header className="px-4 lg:px-10 z-10">
        {/* Mobile Top Nav */}
        <div className="flex gap-4 text-gray-900 justify-end z-10">
          <button className="">
            <MagnifyingGlassIcon className="w-5 h-5 lg:hidden" />
          </button>
          <button>
            <BellIcon className="w-5 h-5 lg:hidden" />
          </button>
        </div>

        {/* Top header section */}
        <div className="flex justify-between mb-5">
          {/* <HeaderTitle /> */}
          {title}

          {/* Search input and button */}
          <SearchBar search={search} />
        </div>
        <div>
          {display}
          {other}
        </div>
      </header>
    </>
  );
}
