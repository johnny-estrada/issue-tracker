import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";

export default function SectionHeader() {
  return (
    <div className="">
      <div className="flex gap-4 text-gray-900 justify-end">
        <MagnifyingGlassIcon className="w-5 h-5 lg:hidden" />
        <BellIcon className="w-5 h-5 lg:hidden" />
      </div>
      <div>
        <h3 className="font-semibold lg:mt-8 text-xs text-gray-500">
          Good morning, Johnny!
        </h3>
        <h1 className="mt-1 text-3xl lg:text-4xl leading-6 text-gray-900">
          Dashboard
        </h1>
      </div>

      <div className=" ">
        <label htmlFor="mobile-search-candidate" className="sr-only">
          Search
        </label>
        <label htmlFor="desktop-search-candidate" className="sr-only">
          Search
        </label>

        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="hidden lg:inline h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            {/* <input
              type="text"
              name="mobile-search-candidate"
              id="mobile-search-candidate"
              className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
              placeholder="Search"
            /> */}
            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className="hidden w-full  rounded-full border-0 py-1.5 pl-10 bg-white text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:block"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="hidden ml-3 lg:inline-flex  rounded-md bg-orange-500 px-8 py-2 text-sm font-semibold text-white shadow-sm"
          >
            + Create
          </button>
        </div>
      </div>
    </div>
  );
}
