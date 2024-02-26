import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs() {
  const location = useLocation();
  const currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((Boolean) => Boolean)
    .map((crumb, index, array) => {
      ` ${currentLink}/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      return (
        <div className="flex items-center gap-1" key={crumb}>
          <Link className="text-neutral-500" to={currentLink}>
            {crumb}
          </Link>
          {!isLastCrumb && (
            <ChevronRightIcon
              className="h-4 w-4 flex-shrink-0 text-neutral-500"
              aria-hidden="true"
            />
          )}
        </div>
      );
    });

  return (
    <nav className="hidden lg:flex gap-1 items-center" aria-label="Breadcrumb">
      <Link
        to="/"
        className="text-sm text-neutral-500 hover:text-neutral-600 align-baseline"
      >
        Home
      </Link>
      <ChevronRightIcon
        className="h-4 w-4 flex-shrink-0 text-neutral-500"
        aria-hidden="true"
      />
      {crumbs}
      {/* <ol className="flex items-center space-x-1 z-10">
        <li>
          <Link
            to="/"
            className="text-sm text-neutral-500 hover:text-neutral-600 align-baseline"
          >
            Home
          </Link>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-4 w-4 flex-shrink-0 text-neutral-500"
                aria-hidden="true"
              />
              <Link
                to={page.to}
                className="text-sm ml-1 text-neutral-500
                hover:text-gray-700 align-baseline"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol> */}
    </nav>
  );
}
