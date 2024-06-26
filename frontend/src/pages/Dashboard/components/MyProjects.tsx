import { Link } from "react-router-dom";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import Menu1 from "../../../components/ui/Menu1";
import SelectorList from "../../../components/ui/SelectorList";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { SyntheticEvent } from "react";

interface Project {
  projects: object[];
  id: number;
  client: string;
  startDate: string;
  targetDate: string;
  team: object[];
}

interface Task {
  id: number;
}

interface Dates {
  formattedDates: object[];
  startDate: string;
  targetDate: string;
}

interface Props {
  id: Task;
  projectIndex: number;
  projects: Project[];
  tasks: Task[];
  refetch: any;
  toggleProjects: (e: SyntheticEvent) => void;
  formattedDates: Dates[];
  userInfo: any;
}

const MyProjects = ({
  id,
  projectIndex,
  projects,
  tasks,
  refetch,
  userInfo,
  toggleProjects,
  formattedDates,
}: Props) => {
  const NAV = [
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

  const projectList = projects
    ?.filter((project) => project.userId === userInfo.id)
    .map((project, idx) => (
      <SelectorList
        key={project.id}
        id={idx}
        active={projectIndex === idx}
        onClick={toggleProjects}
      >
        <div className="flex min-w-0 gap-x-4 text-left m-2">
          <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white text-black">
            <p>BK</p>
          </div>
          <div className="">
            <p className="text-base line-clamp-1">{project.client}</p>
            <div className="mt-1 flex text-xs leading-5 text-gray-400">
              <span className="inset-x-0 -top-px bottom-0" />
              <p className="flex flex-wrap text-xs lg:text-sm leading-5 text-gray-400">
                <span className="inset-x-0 -top-px bottom-0" />9 tasks &#x2022;
                2 overdue
              </p>
              {/* {project.tasksList.length} tasks &#x2022; {project.overdue} overdue */}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-x-10 m-2">
          <AvatarGroup members={project.team} />
          <p className="text-gray-400 text-sm">
            {formattedDates[idx]?.startDate} - {formattedDates[idx]?.targetDate}
          </p>
        </div>
      </SelectorList>
    ));

  // console.log(projects[projectIndex].userId === userInfo.id);
  // console.log(projectList.length);

  return (
    <>
      <section aria-labelledby="projects">
        <header className="flex  justify-between pb-2">
          <div className="flex items-baseline gap-3">
            <h2 className="sr-only" id="projects">
              My projects
            </h2>
            <h2 className="text-2xl">My projects</h2>
            <Link
              to="/projects"
              className="underline text-xs text-orange-400 hover:text-orange-500"
            >
              view all
            </Link>
          </div>

          <Menu1
            id={id}
            refetch={refetch}
            navigation={NAV}
            delete1={"Delete"}
          />
        </header>
        <div className="flex flex-col gap-3 overflow-hidden rounded-lg">
          {projectList.length ||
          projects[projectIndex].userId === userInfo.id ? (
            <> {projectList}</>
          ) : (
            <>No projects found</>
          )}
        </div>
      </section>
    </>
  );
};

export default MyProjects;
