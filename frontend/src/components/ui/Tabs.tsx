import { SyntheticEvent, useState } from "react";
import { Tab } from "@headlessui/react";
import LineChart from "../../pages/Dashboard/components/LineChart";
import ShowHideList from "../../pages/Dashboard/components/ShowHideList";
import SelectorList from "../ui/SelectorList";
import AvatarGroup from "./AvatarGroup";

function classNames(...classes: object[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  data: object[];
  projectData: object[];
}

export default function Tabs({ data, projectData }: Props) {
  const [projects, setProjects] = useState(projectData);
  const [projectIndex, setProjectIndex] = useState(0);

  function toggleProjects(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
  }

  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={idx}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white text-black">
          <p>BK</p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6">{project.client}</p>
          <p className=" mt-1 flex text-xs leading-5 text-gray-400">
            <span className="inset-x-0 -top-px bottom-0" />
            {project.tasks} tasks &#x2022; {project.overdue} overdue
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <AvatarGroup members={[]} />
        <p className="text-gray-400">
          {project.startDate} - {project.targetDate}
        </p>
      </div>
    </SelectorList>
  ));

  return (
    <div className="lg:hidden w-full px-2 py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm border-neutral-300",
                selected
                  ? "border-gray-400 text-gray-500"
                  : " text-neutral-300 hover:border-gray-300 hover:text-gray-600",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm",
              )
            }
          >
            Statistics
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm text-stone-800",
                selected
                  ? "border-gray-400"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm",
              )
            }
          >
            My Tasks
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "lg:w-full py-2.5 text-sm text-stone-800",
                selected
                  ? "border-gray-400"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm",
              )
            }
          >
            My Projects
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel
            className={classNames(
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <LineChart data={data} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              " p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <ShowHideList
              projectIndex={projectIndex}
              projects={projects}
              tasks={[]}
            />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              " p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <ul className="flex flex-col gap-3 overflow-hidden rounded-lg px-1 py-4">
              {projectList}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
