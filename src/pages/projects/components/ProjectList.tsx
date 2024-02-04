import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SelectorList from "../../../components/ui/SelectorList";
import AvatarGroup from "../../../components/ui/AvatarGroup";

function ProjectList({
  projects,
  projectIndex,
  toggleProjects,
  formattedDates,
}) {
  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={project.id}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <h4 className="text-sm lg:text-base leading-6">{project.client}</h4>
          <p className="flex text-xs lg:text-sm leading-5 text-gray-400">
            <span className="inset-x-0 -top-px bottom-0" />9 tasks &#x2022; 2
            overdue
          </p>
        </div>
      </div>
      <div>
        <div className="hidden lg:flex shrink-0 items-center gap-x-4">
          <AvatarGroup members={project.team} />
          <p className="text-gray-400 text-xs">
            {formattedDates[idx]?.startDate} - {formattedDates[idx]?.targetDate}
          </p>
        </div>
        <div className="flex justify-center mt-2.5">
        <ChevronRightIcon className="w-5 h-5 lg:hidden text-gray-400" />
        </div>

      </div>
    </SelectorList>
  ));

  return (
    <>
      <section aria-labelledby="projects">
        <header className="flex justify-between">
          <h2 className="sr-only" id="projects">
            All Projects
          </h2>

          <h2 className="text-xl lg:text-2xl px-4 pb-4 pt-4 lg:pt-0 lg:px-0">
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

        <div className="lg:flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4 hidden">
          {projectList}
        </div>
        <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-4 lg:px-1 py-4 lg:hidden">
          {projectList}
        </div>
      </section>
    </>
  );
}

export default ProjectList;
