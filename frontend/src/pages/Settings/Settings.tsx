import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import { Tab } from "@headlessui/react";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import Users from "./admin/Users";
import ProfileDetails from "./ProfileDetails";
import SearchBar from "../../components/ui/header/SearchBar";
import Column from "../../layout/Column";

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

function Settings() {
  const { data: users } = useGetUsersQuery("");

  const { userInfo } = useAppSelector((state) => state.auth);
  console.log(userInfo.role);

  const title = "Settings";

  return (
    <>
      <Column>
        <HeaderTitle title={title} />
        <SearchBar />
        <></>
        <div className="grid grid-cols-1 lg:flex flex-col lg:w-screen">
          <Tab.Group>
            <Tab.List className="flex bg-gray-200 px-2 pb-4 lg:pb-5">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "ml-4 lg:ml-12 text-sm leading-5 relative inline-flex items-center rounded-l-md  px-3 py-1.5 text-stone-800  hover:bg-gray-50 focus:z-10 shadow-sm",
                    selected
                      ? "bg-stone-800 text-white pointer-events-none"
                      : "bg-white text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 text-sm",
                  )
                }
              >
                profile
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "text-sm leading-5 relative inline-flex items-center rounded-r-md px-3 py-1.5 text-stone-800 hover:bg-gray-50 focus:z-10 shadow-sm",
                    selected
                      ? "bg-stone-800 text-white pointer-events-none"
                      : "bg-white border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 text-sm",
                  )
                }
              >
                users
              </Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel
                className={classNames(
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                )}
              >
                <ProfileDetails />
              </Tab.Panel>

              <Tab.Panel
                className={classNames(
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                )}
              >
                <section
                  aria-labelledby="projects"
                  className="flex-1 p-10 mb-auto"
                >
                  <Users users={users} />
                </section>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Column>
    </>
  );
}

export default Settings;
