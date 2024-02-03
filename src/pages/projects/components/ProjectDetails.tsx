import { Link } from "react-router-dom";
import Details from "../../../components/ui/Details";
import Menu1 from "../../../components/ui/Menu1";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import FlatBadge from "../../../components/ui/FlatBadge";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";

const ProjectDetails = ({ projects, projectIndex, id, refetch, tasks }) => {
  const NAV = [
    {
      name: "Create project",
      href: "/projects/create-project",
      icon: PlusIcon,
    },
    {
      name: "Edit project",
      href: `/projects/edit-project/${id}`,
      icon: PencilSquareIcon,
    },
  ];

  return (
    <>
      <section aria-labelledby="projects">
        {projects[projectIndex] ? (
          <>
            <header className="flex justify-between">
              <h3 className="sr-only" id="projects">
                Project details
              </h3>
              <h3 className="text-xl pb-4">{projects[projectIndex].title}</h3>
              <Menu1
                id={id}
                refetch={refetch}
                navigation={NAV}
                delete1={"Delete project"}
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
      <section aria-labelledby="tasks">
        <header className="flex items-baseline gap-3">
          <h3 className="sr-only" id="tasks">
            Tasks
          </h3>
          <h3 className="text-xl pb-4">Tasks</h3>
          <Link
            to="/tasks"
            className="underline text-xs text-orange-400 hover:text-orange-500"
          >
            view all
          </Link>
        </header>

        {tasks?.map(
          (item) =>
            item.projectId === projects[projectIndex].id && (
              <div
                key={item.id}
                className="flex cursor-pointer justify-between mb-3 gap-x-6 px-4 py-4 hover:bg-gray-200 sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5 mr-9"
              >
                <div className="min-w-0 flex-auto">
                  <p className=" mt-1 flex text-sm text-gray-400">
                    <span className="inset-x-0 -top-px bottom-0" />
                    ID PL-
                    {item.id}
                  </p>
                  <p className="text-base">{item.name}</p>
                </div>

                <div className="flex shrink-0 items-center gap-x-4">
                  <FlatBadge priority={item.priority} />
                  <span className="text-gray-400">
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ),
        )}
      </section>
    </>
  );
};

export default ProjectDetails;
