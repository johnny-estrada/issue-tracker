import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

import { NavLink } from "react-router-dom";
import { useDeleteProjectMutation } from "../../services/state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Menu1({ navigation, id, delete1 }) {
  const [deleteProject, refetch] = useDeleteProjectMutation();

  const deleteHandler = async (id) => {
    if (window.confirm(`Are you sure you want to delete project ${id}`)) {
      try {
        await deleteProject(id);
        refetch(id);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="hidden lg:flex w-full flex-1 items-center gap-x-4 px-2 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 rounded-full">
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
          <Menu.Items className="absolute -translate-x-44 left mt-2 w-56 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
            <div className="px-1 py-1">
              {navigation.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <NavLink
                      to={item.href}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {
                        <item.icon
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                        />
                      }
                      {item.name}
                    </NavLink>
                  )}
                </Menu.Item>
              ))}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => deleteHandler(id)}
                    className={`${
                      active ? "bg-gray-100 text-red-600" : "text-red-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <TrashIcon className=" w-4 h-4 mr-2" />
                    {delete1}
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
