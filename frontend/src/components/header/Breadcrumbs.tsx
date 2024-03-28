import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, index, array) => {
      const currentLink = `/${array.slice(0, index + 1).join("/")}`;
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
    </nav>
  );
}
