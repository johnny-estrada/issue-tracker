import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import EditProject from "../../pages/manager/EditProject";

export default function DropDown({
  id,
  onCancelEdit,
  onAddProject,
  onEditProject,
}) {
  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="hidden lg:flex w-full flex-1 items-center gap-x-4 px-2 py-2 text-sm font-semibold leading-6 text-stone-800 hover:bg-gray-100 rounded-full">
            <EllipsisHorizontalIcon className=" w-7 h-7" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -translate-x-44 left- mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={onAddProject}
                  >
                    Create
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to={`/projects/${id}/edit`}
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
