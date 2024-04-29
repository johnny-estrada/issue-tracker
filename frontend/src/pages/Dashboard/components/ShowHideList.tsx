import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FlatBadge from "../../../components/ui/FlatBadge";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { formatDate } from "../../../utils/formatting";

interface Project {
  projects: object[];
  id: string & number;
  team: object[];
}

interface Task {
  tasks: object[];
  id: string & number;
  projectId: number;
  name: string;
  priority: string;
  description: string;
  startDate: string;
  targetDate: string;
}

interface Props {
  projects: Project[];
  projectIndex: number;
  tasks: Task[];
}

export default function ShowHideList({ projects, projectIndex, tasks }: Props) {
  const [openDisclosureId, setOpenDisclosureId] = useState<
    string | number | null
  >(null);

  if (!tasks || !tasks[projectIndex] || !projects) {
    return null;
  }

  const handleDisclosureToggle = (taskId: string | number) => {
    setOpenDisclosureId(taskId === openDisclosureId ? null : taskId);
  };

  return (
    <ul className="pt-4 lg:pt-0">
      {tasks?.map(
        (task: Task) =>
          task.projectId === projects[projectIndex]?.id && (
            <li key={task.id}>
              <div>
                <Disclosure>
                  {({ open }) => (
                    <React.Fragment>
                      <Disclosure.Button
                        onClick={() => handleDisclosureToggle(task.id)}
                        className={`flex flex-col flex-wrap w-full justify-between text-left text-sm text-neutral-500 z-10 p-5 mb-2 sm:flex-nowrap rounded-lg shadow-sm ring-1 ring-gray-200 ${
                          open && openDisclosureId === task.id
                            ? "bg-neutral-800 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-400">
                              TSK-{task.id}
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
                        <Disclosure.Panel
                          className={`mb-7 text-sm z-10 ${
                            open && openDisclosureId === task.id
                              ? "text-neutral-300"
                              : ""
                          }`}
                        >
                          {task.description}
                        </Disclosure.Panel>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center justify-center gap-4">
                            <FlatBadge priority={task.priority} />
                            {open && openDisclosureId === task.id && (
                              <div className="flex items-center justify-center gap-4">
                                <AvatarGroup members={projects[1].team} />
                                <p className="text-sm text-neutral-300">
                                  {formatDate({
                                    dateString: task.startDate,
                                    options: {
                                      month: "short",
                                      day: "numeric",
                                    },
                                  })}
                                  -{" "}
                                  {formatDate({
                                    dateString: task.targetDate,
                                    options: {
                                      month: "short",
                                      day: "numeric",
                                    },
                                  })}
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
