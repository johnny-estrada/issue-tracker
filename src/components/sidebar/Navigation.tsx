import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  navigation: object[];
}

export default function Navigation({ navigation }: Props) {
  return (
    <>
      <nav>
        <ul className="flex justify-evenly lg:justify-between lg:flex-col">
          {navigation.map((item) => (
            <li key={item.name} className="flex">
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "lg:bg-gray-600 text-white hover:text-white hover:bg-gray-700 group lg:flex lg:w-full text-xs lg:text-base leading-6  p-4 pl-8 pointer-events-none"
                      : "text-neutral-400 hover:text-white hover:bg-gray-700 group lg:flex lg:w-full text-xs lg:text-base p-4 pl-8"
                }
              >
                <item.icon
                  className={classNames(
                    item.current ? "" : "text-gray-400 group-hover:text-white",
                    "h-6 w-6 shrink-0 m-auto lg:mr-4 lg:ml-0",
                  )}
                />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <DropDown />
      </nav>
    </>
  );
}
