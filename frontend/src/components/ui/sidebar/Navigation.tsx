import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  navigation: Navigation[];
  mobileNavigation: Navigation[];
}

interface Navigation {
  name: string;
  href: string;
  current: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Navigation({ navigation, mobileNavigation }: Props) {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="lg:flex justify-center lg:justify-between lg:flex-col group tracking-wide">
          {navigation.map((item) => (
            <li key={item.name} className="flex mx-4 mt-2 mb-4  lg:m-0">
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "lg:bg-gray-600 text-white hover:text-white hover:bg-gray-700 group lg:flex lg:w-full text-xs lg:text-base leading-6 lg:p-4 lg:pl-8 pointer-events-none"
                      : "text-neutral-400 hover:text-white hover:bg-gray-700 group lg:flex lg:w-full text-xs lg:text-base lg:p-4 lg:pl-8"
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
      {/* MOBILE NAVIGATION */}
      <nav className="lg:hidden">
        <ul className="flex">
          {mobileNavigation.map((item) => (
            <li key={item.name} className="mx-4 mt-2 mb-4">
              <NavLink
                to={item.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                      ? "text-white group lg:flex lg:w-full text-xs lg:text-base leading-6 lg:p-4 lg:pl-8 pointer-events-none"
                      : "text-neutral-400 group lg:flex lg:w-full text-xs lg:text-base leading-6 lg:p-4 lg:pl-8"
                }
              >
                <item.icon
                  className={classNames(
                    item.current ? "" : "text-gray-400",
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
