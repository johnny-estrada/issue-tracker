import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FlatBadge from "../../../components/ui/FlatBadge";

export default function ShowHideList({ projects, projectIndex, tasks, dates }) {
  if (!tasks || !tasks[projectIndex]) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  if (!projects) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  return (
    <ul>
      {tasks?.map(
        (task) =>
          task.projectId === projects[projectIndex]?.id && (
            <li
              key={task.id}
              className="flex flex-col flex-wrap justify-between p-5 mb-2 sm:flex-nowrap bg-gray-100 rounded-lg"
            >
              <div>
                <h3 className="text-sm text-neutral-500">ID RA - {task.id}</h3>
                <p className="text-base mb-3 text-gray-900">{task.name}</p>
              </div>

              <div>
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Panel className="mb-5 text-sm text-neutral-500 z-10">
                        {task.details}
                      </Disclosure.Panel>

                      <Disclosure.Button className="flex flex-wrap w-full justify-between bg-gray-100 text-left text-sm text-neutral-500 hover: hover:bg-stone-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 z-10">
                        <FlatBadge priority={task.priority} />
                        <dl className="flex flex-none justify-between gap-x-8 sm:w-auto">
                          <div className="flex -space-x-0.5">
                            {/* Render team members if available */}
                            {/* {task.team.map((team) => (
                          <dd key={team.id}>
                            <img
                              className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                              src={team.imageUrl}
                              alt={team.name}
                            />
                          </dd>
                        ))} */}
                          </div>
                          <div className="flex w-16 gap-x-2.5"></div>
                        </dl>
                        <p>
                          {dates[projectIndex]?.startDate} -{" "}
                          {dates[projectIndex]?.targetDate}
                        </p>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-stone-800`}
                        />
                      </Disclosure.Button>
                    </div>
                  )}
                </Disclosure>
              </div>
            </li>
          ),
      )}
    </ul>
  );
}
