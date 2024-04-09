import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to={"/"}>
      <div className="hidden lg:flex shrink-0 items-center gap-3">
        <svg width="26" height="26" xmlns="https://www.w3.org/2000/svg">
          <g fill="#FF7A50" fillRule="evenodd">
            <rect width="6" height="25" rx="2" />
            <rect opacity=".75" x="9" width="6" height="25" rx="2" />
            <rect opacity=".5" x="18" width="6" height="25" rx="2" />
          </g>
        </svg>
        <span className="text-white text-2xl tracking-wide">Klarity</span>
      </div>
    </NavLink>
  );
}
