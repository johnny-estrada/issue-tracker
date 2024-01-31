import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { formatDate } from "../../utils/formatting";

import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";

import Header from "../../components/header/Header";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import Details from "../../components/ui/Details";
import SelectorList from "../../components/ui/SelectorList";
import AvatarGroup from "../../components/ui/AvatarGroup";
import FlatBadge from "../../components/ui/FlatBadge";
import ListMenu from "../../components/ui/ListMenu";
import Loader from "../../components/ui/Loader";
import Sidebar from "../../components/sidebar/Sidebar";
import Tabs from "../../components/ui/Tabs";

function Projects() {
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery();
  const { data: tasks } = useGetTaskQuery();

  const [projectIndex, setProjectIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {
    if (projects) {
      const formattedDatesArray = projects.map((project) => {
        const startDate = formatDate(project.startDate, {
          month: "short",
          day: "numeric",
        });

        const targetDate = formatDate(project.targetDate, {
          month: "short",
          day: "numeric",
        });

        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [projects]);

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);

    setProjectIndex(i);
  }

  const title = "Projects";

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error?.data?.message || error.error}</div>;
  }

  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={project.id}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <h4 className="text-sm leading-6">{project.client}</h4>
          <p className="flex text-xs leading-5 text-gray-400">
            <span className="inset-x-0 -top-px bottom-0" />9 tasks &#x2022; 2
            overdue
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <AvatarGroup members={project.team} />
        <p className="text-gray-400 text-xs">
          {formattedDates[idx]?.startDate} - {formattedDates[idx]?.targetDate}
        </p>
      </div>
    </SelectorList>
  ));

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title={title} />
          <div className="flex justify-between">
            <ButtonGroup titles={["all", "active", "closed", "on hold"]} />
            <FilterButton />
          </div>
        </Header>

        {/* left-col Input */}
        <Tabs projectData={projects} />
        <main className="lg:flex lg:h-screen hidden">
          <div className="flex-1 px-14 pt-10 mb-auto">
            <section aria-labelledby="projects">
              <header className="flex justify-between">
                <h2 className="sr-only" id="projects">
                  All Projects
                </h2>

                <h2 className="text-xl pb-4">Active projects</h2>
                <div className="flex items-center">
                  <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon
                      className="w-4 h-4 hover:bg-gray-100 rounded-full"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </header>

              <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
                {projectList}
              </div>
            </section>
          </div>

          {/* right-col Output */}
          <div className="flex-1 px-14 pt-10 border-l border-gray-200">
            <section aria-labelledby="projects">
              {projects[projectIndex] ? (
                <>
                  <header className="flex justify-between">
                    <h3 className="sr-only" id="projects">
                      Project details
                    </h3>
                    <h3 className="text-xl pb-4">
                      {projects[projectIndex].title}
                    </h3>
                    <ListMenu
                      id={projects[projectIndex].id}
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
          </div>
        </main>
      </div>
    </>
  );
}

export default Projects;
