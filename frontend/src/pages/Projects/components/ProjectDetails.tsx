import Details from "../../../components/ui/Details";
import Menu1 from "../../../components/ui/Menu1";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import TasksList from "./TasksList";
import { ReactElement } from "react";

interface Project {
  projects: object[];
  name: string;
  title: string;
  startDate: string;
  targetDate: string;
  description: string;
  client: string;
  team: Member[];
}

interface Member {
  team: object[];
  id: string;
  photo: string;
}

interface Task {
  tasks: object[];
  id: number;
  name: string;
  projectId: number;
  priority: string;
  title: string;
  description: string;
  client: string;
  team: object[];
  startDate: string;
  targetDate: string;
  status: string;
}

interface Navigation {
  navigation: object[];
  name: string;
  href: string;
  icon: ReactElement;
}

interface Props {
  projects: Project[];
  projectIndex: number;
  id: number;
  tasks: Task[];
  refetch: () => void;
  isVisible: boolean;
}
const ProjectDetails = ({
  projects,
  projectIndex,
  id,
  tasks,
  refetch, // isVisible,
}: Props) => {
  const NAV: Navigation[] = [
    {
      name: "Edit",
      href: `/projects/edit/${id}`,
      icon: PencilSquareIcon,
    },
    {
      name: "Create",
      href: "/projects/create",
      icon: PlusIcon,
    },
  ];

  return (
    <div className="flex lg:flex-col">
      <section
        aria-labelledby="projects"
        className="p-4 lg:p-0 hidden lg:block"
      >
        {projects[projectIndex] ? (
          <>
            <header className="flex justify-between">
              <h3 className="sr-only" id="projects">
                Project details
              </h3>
              <h3 className="text-xl lg:text-2xl pb-4">
                {projects[projectIndex].title}
              </h3>
              <Menu1
                id={id}
                navigation={NAV}
                delete1={"Delete"}
                refetch={refetch}
              />
            </header>
            <Details
              client={projects[projectIndex].client}
              description={projects[projectIndex].description}
              startDate={projects[projectIndex].startDate}
              targetDate={projects[projectIndex].targetDate}
              members={projects[projectIndex].team}
            />
          </>
        ) : (
          <p>No project selected</p>
        )}
      </section>
      <TasksList tasks={tasks} id={id} />
      {/* <section className="flex flex-col gap-3 overflow-hidden text-sm flex-grow mt-4 mb-10">
        <header className="flex items-baseline gap-3">
          <h3 className="sr-only" id="tasks">
            Progress
          </h3>
          <h3 className="text-xl lg:text-2xl">Progress</h3>
        </header>
        <div className="flex w-full h-10 border border-gray-200 shadow-sm rounded-full justify-center items-center">
          <div className=" w-full mx-4 h-2 border border-gray-200 bg-gray-100 shadow-sm rounded-full mr-5">
            <div className="w-1/2 h-2 bg-gray-600 border border-gray-200 shadow-sm rounded-full"></div>
          </div>
          <span className="mr-4">42%</span>
        </div>
      </section> */}
    </div>
  );
};

export default ProjectDetails;
