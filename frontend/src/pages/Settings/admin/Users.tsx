import { toast } from "react-toastify";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Image } from "cloudinary-react";

interface User {
  name: string;
  title: string;
  email: string;
  photo: string;
  role: string;
}

export default function Users({ users }) {
  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  const cloud_name = "dm1cbmiwq";

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-3">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="sr-only" id="tasks">
              All users
            </h2>

            <h2 className="text-xl lg:text-2xl pb-4">Users</h2>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users including their name, title, email,
              status, and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users?.map((user: User) => (
                    <tr key={user.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            {user.photo ? (
                              <Image
                                style={{
                                  width: 45,
                                  height: 45,
                                  borderRadius: 50,
                                }}
                                className="border-2 border-neutral-400 block"
                                cloudName={cloud_name}
                                publicId={user.photo}
                              />
                            ) : (
                              <UserCircleIcon
                                className="h-12 w-12 text-gray-300"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{user.title}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {user.role}
                      </td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="/"
                          className="text-gray-500 hover:text-gray-900 mr-5"
                        >
                          Edit<span className="sr-only">, {user.name}</span>
                        </a>
                        <a href="/" className="text-red-500 hover:text-red-600">
                          Delete<span className="sr-only">, {user.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
