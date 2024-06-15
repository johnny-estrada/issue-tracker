import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, index, array) => {
      const currentLink = `/${array.slice(0, index + 1).join("/")}`;
      const isLastCrumb = index === array.length - 1;
      const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

      return (
        <div className="flex items-center gap-1" key={crumb}>
          <Link
            className="text-slate-600 hover:text-slate-500 text-sm lg:text-base"
            to={currentLink}
          >
            {capitalizedCrumb}
          </Link>
          {!isLastCrumb && (
            <ChevronRightIcon
              className="h-4 w-4 text-slate-600"
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
        className="text-sm lg:text-base text-slate-600 hover:text-slate-500 align-baseline"
      >
        Home
      </Link>
      <ChevronRightIcon
        className="h-4 w-4 flex-shrink-0 text-slate-600"
        aria-hidden="true"
      />
      {breadcrumbs}
    </nav>
  );
}
