import {useState} from 'react'
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FlatBadge from "./FlatBadge";

interface Props {
  projectData: object[];
  projectIndex: number;
}

export default function TasksList({ projectData, projectIndex }: Props) {
  const [projects, setProject] = useState(projectData);
 

  // function toggleProjects(e) {
  //   const i = Number(e.currentTarget.id);
  //   setProjectIndex(i);
  // }

  return (
    <ul>
      {projects[projectIndex].tasksList.map((task, i) => (
        <li
          key={i}
       
          className="flex flex-col flex-wrap justify-between gap-y-4 p-4 mb-2 sm:flex-nowrap bg-gray-100 rounded-lg"
        >
          <div>
            <h3>ID RA - {task.id}</h3>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {task.title}
            </p>
          </div>

          <div>
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 z-10">
                    {task.description}
                  </Disclosure.Panel>

                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover: hover:bg-stone-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 z-10">
                    <FlatBadge />
                    <dl className="flex flex-none justify-between gap-x-8 sm:w-auto">
                      <div className="flex -space-x-0.5">
                        <dt className="sr-only">Team</dt>
                        {task.team.map((team) => (
                          <dd key={team.id}>
                            <img
                              className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                              src={team.imageUrl}
                              alt={team.name}
                            />
                          </dd>
                        ))}
                      </div>
                      <div className="flex w-16 gap-x-2.5"></div>
                    </dl>
                    <p>{task.startDate} - {task.targetDate}</p>
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
      ))}
    </ul>
  );
}
