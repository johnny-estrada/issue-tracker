import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useGetProjectsQuery } from "../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../utils/formatting";
import Header from "../components/header/Header";
import HeaderTitle from "../components/header/HeaderTitle";
import Sidebar from "../components/sidebar/Sidebar";
import ButtonGroup from "../components/header/ButtonGroup";
import FilterButton from "../components/header/FilterButton";
import SelectorList from "../components/ui/SelectorList";
import AvatarGroup from "../components/ui/AvatarGroup";
import ListMenu from "../components/ui/ListMenu";

const Notifications = () => {
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery();

  const [projectIndex, setProjectIndex] = useState(-1);
  const [formattedDates, setFormattedDates] = useState([]);

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);

    setProjectIndex(i);
  }

  const title = "Notifications";
  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title={title} />
          <div className="flex justify-between">
            <ButtonGroup titles={["all", "unread", "read"]} />
            <FilterButton />
          </div>
        </Header>
        <main className="lg:flex lg:h-screen hidden">
          <div className="px-14 pt-10 mb-auto lg:basis-2/3">
            <section aria-labelledby="notifications">
              <header className="flex justify-between">
                <div className="flex gap-3">
                  <h2 className="sr-only" id="notifications">
                    All Notifications
                  </h2>

                  <h2 className="text-xl p-1">
                    Notifications
                  </h2>
                  <button className="text-xs text-orange-400 hover:text-orange-500 p-1">
                    mark all as read
                  </button>
                </div>

                <div className="flex items-center">
                  <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon
                      className="w-4 h-4 hover:bg-gray-100 rounded-full"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </header>

              <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
                {projects?.map((project, idx) => (
                  <SelectorList
                    key={project.id}
                    id={idx}
                    active={projectIndex === idx}
                    onClick={toggleProjects}
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <AvatarGroup members={project.team} />
                      <div className="min-w-0 flex-auto">
                        <h4 className="text-sm font-semibold leading-6">
                          Johnny Estrada{" "}
                          <span className="text-sm font-normal">
                            commented on task ID-321A
                          </span>
                        </h4>
                        <p className="flex text-xs leading-5 text-gray-400">
                          <span className="inset-x-0 -top-px bottom-0" />
                          an hour ago
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                      <button className="text-gray-400 text-xs">
                        <ListMenu />
                      </button>
                    </div>
                  </SelectorList>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Notifications;

{
  /* <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 lg:grid-cols-3">
<div className="px-4 sm:px-0">
  <h2 className="text-base font-semibold leading-7 text-gray-900">
    Notifications
  </h2>
  <p className="mt-1 text-sm leading-6 text-gray-600">
    We'll always let you know about important changes, but you pick what
    else you want to hear about.
  </p>
</div>

<form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
  <div className="px-4 py-6 sm:p-8">
    <div className="max-w-2xl space-y-10">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          By Email
        </legend>
        <div className="mt-6 space-y-6">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="comments"
                className="font-medium text-gray-900"
              >
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="candidates"
                className="font-medium text-gray-900"
              >
                Candidates
              </label>
              <p className="text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="offers"
                className="font-medium text-gray-900"
              >
                Offers
              </label>
              <p className="text-gray-500">
                Get notified when a candidate accepts or rejects an
                offer.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Push Notifications
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          These are delivered via SMS to your mobile phone.
        </p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Everything
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Same as email
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-nothing"
              name="push-notifications"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-nothing"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No push notifications
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  <div className="flex items-center justify-end gap-x-6 border border-gray-900/10 px-4 py-4 sm:px-8">
    <button
      type="submit"
      className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Save
    </button>
  </div>
</form>
</div> */
}
