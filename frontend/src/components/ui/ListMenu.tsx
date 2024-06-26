import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useDeleteProjectMutation } from "../../state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";

interface Props {
  id: string;
  refetch: any;
}

export default function ListMenu({ id, refetch }: Props) {
  const [deleteProject, { isLoading: loadingDelete }] =
    useDeleteProjectMutation();

  const deleteHandler = async (id: string) => {
    if (window.confirm(`Are you sure you want to delete project ${id}`)) {
      try {
        await deleteProject(id);
        refetch();
      } catch (err) {
        toast.error(`${err}`);
      }
    }
  };

  return (
    <div>
      {loadingDelete && <Loader />}
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
          <Menu.Items className="absolute -translate-x-44 left mt-2 w-56 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/projects/create-project"
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <PlusIcon className=" w-4 h-4 mr-2" />
                    Create project
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to={`/projects/edit-project/${id}`}
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <PencilSquareIcon className=" w-4 h-4 mr-2" />
                    Edit project
                  </NavLink>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => deleteHandler(id)}
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <TrashIcon className=" w-4 h-4 mr-2" />
                    Delete projects
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
