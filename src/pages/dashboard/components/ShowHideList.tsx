import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FlatBadge from "../../../components/ui/FlatBadge";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function ShowHideList({
  projects,
  projectIndex,
  tasks,
  formattedDates,
}) {
  if (!tasks || !tasks[projectIndex] || !projects) {
    // Handle the case where tasks or projects are undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  const [openDisclosureId, setOpenDisclosureId] = useState(null);

  const handleDisclosureToggle = (taskId) => {
    setOpenDisclosureId(taskId === openDisclosureId ? null : taskId);
  };

  return (
    <ul>
      {tasks?.map(
        (task) =>
          task.projectId === projects[projectIndex]?.id && (
            <li key={task.id}>
              <div>
                <Disclosure>
                  {({ open }) => (
                    <React.Fragment>
                      <Disclosure.Button
                        onClick={() => handleDisclosureToggle(task.id)}
                        className={`flex flex-col flex-wrap w-full justify-between text-left text-sm text-neutral-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 z-10 p-5 mb-2 sm:flex-nowrap rounded-lg ${
                          open && openDisclosureId === task.id
                            ? "bg-neutral-800 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-500">
                              ID RA - {task.id}
                            </p>
                            {open && openDisclosureId === task.id && (
                              <NavLink
                                to={`/tasks/`}
                                className="inline-flex items-center justify-center rounded-full hover:bg-gray-500 w-10 h-10 p-1.5"
                              >
                                <span className="sr-only">Task details</span>
                                <ArrowRightIcon
                                  className="w-9 h-9 m-auto transform -rotate-45 origin-top-left"
                                  aria-hidden="true"
                                />
                                <ArrowLeftIcon
                                  className="w-9 h-9 m-auto transform -rotate-45 origin-bottom-left"
                                  aria-hidden="true"
                                />
                              </NavLink>
                            )}
                          </div>

                          <h3
                            className={`text-base mb-3 line-clamp-1 ${
                              open && openDisclosureId === task.id
                                ? "text-white"
                                : "text-gray-900"
                            }`}
                          >
                            {task.name}
                          </h3>
                        </div>
                        <Disclosure.Panel className="mb-7 text-sm text-neutral-500 z-10">
                          {task.description}
                        </Disclosure.Panel>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center justify-center gap-4">
                            <FlatBadge priority={task.priority} />
                            {open && openDisclosureId === task.id && (
                              <div className="flex items-center justify-center gap-4">
                                <AvatarGroup members={[0]} />
                                <p className="text-sm">
                                  {formattedDates[0]?.startDate} -{" "}
                                  {formattedDates[1]?.targetDate}
                                </p>
                              </div>
                            )}
                          </div>
                          <ChevronDownIcon
                            className={`${
                              open && openDisclosureId === task.id
                                ? "rotate-180 transform text-white"
                                : ""
                            } h-5 w-5 text-stone-800`}
                          />
                        </div>
                      </Disclosure.Button>
                    </React.Fragment>
                  )}
                </Disclosure>
              </div>
            </li>
          ),
      )}
    </ul>
  );
}
