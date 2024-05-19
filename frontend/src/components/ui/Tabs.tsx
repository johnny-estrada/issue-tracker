import { SyntheticEvent, useState } from "react";
import { Tab } from "@headlessui/react";
import LineChart from "../../pages/Dashboard/components/LineChart";
import ShowHideList from "../../pages/Dashboard/components/ShowHideList";
import SelectorList from "../ui/SelectorList";
import AvatarGroup from "./AvatarGroup";
import Status from "../../pages/Dashboard/components/Status";
import { formatDate } from "../../utils/formatting";

interface Project {
  projects: object[];
  id: string & number;
  team: object[];
  client: string;
  startDate: string;
  targetDate: string;
  status: string;
}

interface Task {
  tasks: object[];
}

interface Props {
  data: object[];
  tasks: object[];
  projectData: Project[];
}

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ data, projectData, tasks }: Props) {
  const [projects, _setProjects] = useState(projectData);
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
      <div className="flex items-center min-w-0 gap-x-4">
        <div className="flex w-8 lg:h-12 h-8 lg:w-12 justify-center items-center rounded-full bg-white text-black">
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
      <div className="hidden lg:flex shrink-0 items-center gap-x-4">
        <AvatarGroup members={[]} />
        <p className="text-gray-400 text-sm">
          {formatDate({
            dateString: project.startDate,
            options: { month: "short", day: "numeric" },
          })}{" "}
          -{" "}
          {formatDate({
            dateString: project.targetDate,
            options: { month: "short", day: "numeric" },
          })}
        </p>
      </div>
    </SelectorList>
  ));

  return (
    <div className="lg:hidden w-full py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex rounded-xl p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5",
                selected
                  ? "border-gray-500 text-gray-900"
                  : " text-gray-400 hover:border-gray-900 hover:text-gray-600",
                "whitespace-nowrap border-b-2 py-4 px-1",
              )
            }
          >
            Statistics
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm",
                selected
                  ? "border-gray-600 text-gray-900"
                  : " text-gray-400 hover:border-gray-900 hover:text-gray-600",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm",
              )
            }
          >
            My Tasks
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm",
                selected
                  ? "border-gray-600 text-gray-900"
                  : " text-gray-400 hover:border-gray-900 hover:text-gray-600",
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
            <div className=" mt-4 mx-2">
              <h2 className="sr-only" id="statistics">
                Performance statistics
              </h2>
              <h2 className="text-xl text-gray-800"> Performance statistics</h2>
            </div>
            <div className="flex md:items-center gap-2 lg:gap-10 md:justify-center overflow-auto overflow-y-hidden mt-4">
              {/* <Calendar /> */}
              <Status />
              <div>
                <p className="mb-5 text-sm font-semibold text-neutral-800">
                  tasks created vs tasks completed
                </p>
                <LineChart data={data} />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "lg:p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <ShowHideList
              projectIndex={projectIndex}
              projects={projects}
              tasks={tasks}
            />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "lg:p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <div className="flex flex-col gap-3 overflow-hidden rounded-lg px-1 py-4">
              {projectList}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
