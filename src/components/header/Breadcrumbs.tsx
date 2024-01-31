import { Link } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [{ name: "Projects", to: "#", current: false }];

export default function Breadcrumbs() {
  return (
    <nav className="hidden lg:flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1 z-10">
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
      </ol>
    </nav>
  );
}
