import { SyntheticEvent } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import SelectorList from "../../../components/ui/SelectorList";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import ProjectDetails from "./ProjectDetails";

interface Project {
  id: number;
  client: string;
  team: object[];
  startDate: string;
  targetDate: string;
  members: Member[];
}

interface Member {
  members: object[];
  id: string;
  photo: string;
}

interface FormattedDate {
  startDate: string;
  targetDate: string;
}

interface Props {
  projects: Project[];
  projectIndex: number;
  toggleProjects: (e: SyntheticEvent) => void;
  formattedDates: FormattedDate[];
  isVisible: boolean;
}

function ProjectList({
  projects,
  projectIndex,
  toggleProjects,
  formattedDates,
  isVisible,
}: Props) {
  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={project.id}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex flex-1 flex-col items-start justify-center min-w-0 gap-x-4 ml-4">
        <h4 className="text-sm lg:text-base leading-6 line-clamp-1">
          {project.client}
        </h4>
        <p className="flex flex-wrap text-xs lg:text-sm leading-5 text-gray-400">
          <span className="inset-x-0 -top-px bottom-0" />9 tasks &#x2022; 2
          overdue
        </p>
      </div>
      <div className="flex justify-center mr-4">
        <div className="hidden lg:flex shrink-0 items-center gap-x-10">
          {project.team ? (
            <>
              {" "}
              <AvatarGroup members={project.team} />
            </>
          ) : (
            <>
              <UserCircleIcon className="w-5 h-5 lg:w-8 lg:h-8" />
            </>
          )}

          <p className="text-gray-400 text-sm">
            {formattedDates[idx]?.startDate} - {formattedDates[idx]?.targetDate}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ChevronRightIcon className="w-5 h-5 lg:hidden text-gray-400" />
        </div>
      </div>
    </SelectorList>
  ));

  return (
    <>
      <section aria-labelledby="projects">
        <div>
          <header className="flex justify-between">
            <h2 className="sr-only" id="projects">
              All Projects
            </h2>

            <h2 className="text-xl lg:text-2xl pb-0 lg:pb-4 pt-4 lg:pt-0">
              Active projects
            </h2>
            <div className="hidden lg:flex items-center">
              <button className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
              </button>
              <button className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="w-4 h-4 hover:bg-gray-100 rounded-full"
                  aria-hidden="true"
                />
              </button>
            </div>
          </header>
          <div className="hidden lg:flex flex-col gap-2 rounded-lg py-4">
            {projectList}
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-2 rounded-lg py-2">
          {isVisible ? (
            <>{projectList}</>
          ) : (
            <>
              <ProjectDetails projects={projects} projectIndex={projectIndex} />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ProjectList;
