import { Image } from "cloudinary-react";

import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../state/redux/slices/usersApiSlice";
import { logout } from "../../state/redux/slices/authSlice";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  // UsersIcon,
} from "@heroicons/react/24/outline";
import { formatNameDisplay } from "../../utils/formatting";
import { useAppSelector } from "../../hooks/hooks";

export default function DropDown() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall("").unwrap();
      dispatch(logout(""));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed bottom-10 w-72">
      <Menu as="div">
        <div>
          <Menu.Button className="hidden lg:flex w-full flex-1 items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-600">
            {userInfo.photo ? (
              <Image
                style={{ width: 45, height: 45, borderRadius: 50 }}
                className="border-2 border-neutral-400 block m-auto"
                cloudName="dm1cbmiwq"
                publicId={userInfo.photo}
              />
            ) : (
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
            )}
            <div className="w-36">
              <p className="flex flex-col w-auto text-left">
                <span className="sr-only">Your profile</span>
                <span
                  className="hover:text-white text-base font-normal w-full truncate"
                  aria-hidden="true"
                >
                  {formatNameDisplay(userInfo.name)}
                </span>
                <span
                  className="text-neutral-400 text-sm font-normal"
                  aria-hidden="true"
                >
                  {userInfo.title}
                </span>
              </p>
            </div>

            <ChevronDownIcon
              className="h-5 w-5 text-gray-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute -right-32 -top-14 mt-2 w-56 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/settings"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <UserIcon className=" w-4 h-4 mr-2" />
                    Profile
                  </Link>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/settings"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <UsersIcon className=" w-4 h-4 mr-2" />
                    Users
                  </Link>
                )}
              </Menu.Item> */}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <ArrowRightOnRectangleIcon className=" w-4 h-4 mr-2" />
                    Log out
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
