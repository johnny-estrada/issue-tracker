import {
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
  },
  {
    name: "Tasks",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  // { name: "Notifications", href: "#", icon: ChartPieIcon, count: "12", current: false },
  { name: "Profile", href: "#", icon: UsersIcon, count: "12", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <nav className="">
        <ul
          role="list"
          className="flex justify-around lg:justify-between lg:flex-col"
        >
          {navigation.map((item) => (
            <li key={item.name} className="flex">
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-indigo-700 text-white"
                    : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                  "group lg:flex m-2 lg:w-full text-sm leading-6 font-semibold"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0 m-auto lg:mr-4 lg:ml-0"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <li className="hidden lg:block ml-4 mt-80">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
          >
            <img
              className="h-8 w-8 rounded-full bg-indigo-700"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </a>
        </li>
      </nav>
    </>
  );
}
