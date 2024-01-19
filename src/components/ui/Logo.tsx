import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to={"/"}>
      <div className="hidden lg:flex shrink-0 items-center gap-3 text-white font-semibold text-2xl">
        <svg width="24" height="25" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FF7A50" fillRule="evenodd">
            <rect width="6" height="25" rx="2" />
            <rect opacity=".75" x="9" width="6" height="25" rx="2" />
            <rect opacity=".5" x="18" width="6" height="25" rx="2" />
          </g>
        </svg>
        Kanban
      </div>
    </NavLink>
  );
}
