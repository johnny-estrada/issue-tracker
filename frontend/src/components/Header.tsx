// import Search  from "../header/Search"

import MobileBar from "./ui/header/MobileBar";

export default function Header({ children }) {
  const [title, searchbar, display] = children;

  return (
    <>
      <MobileBar />
      <header
        className="pb-6 pt-3 px-6 lg:pb-3 lg:pt-8  lg:py-4  lg:px-14
      z-10 bg-gray-200"
      >
        {/* Top header section */}
        <div className="flex justify-between mb-3 lg:mb-6">
          {/* <HeaderTitle /> */}
          {title}

          {/* Search input and button */}
          {searchbar}
          {/* <Search /> */}
        </div>
        <div className="lg:mb-5">{display}</div>
      </header>
    </>
  );
}
