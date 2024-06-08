import { useState, useEffect, SyntheticEvent } from "react";
import { toast } from "react-toastify";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";

import TwoColumns from "../../layout/TwoColumns";
import Column from "../../layout/Column";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import ButtonGroup from "../../components/ui/header/ButtonGroup";
import FilterButton from "../../components/ui/header/FilterButton";

import Loader from "../../components/ui/Loader";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import SearchBar from "../../components/ui/header/SearchBar";
import FileFolderIcon from "./components/FileFolderIcon";
import SelectItemIcon from "../Tasks/components/SelectItemIcon";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  // const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>();
  const [formattedDates, setFormattedDates] = useState([]);
  const [isComponentVisible, setComponentVisible] = useState(true);

  const { data: projects, isLoading } = useGetProjectsQuery("");
  const { data: tasks, isLoading: loading } = useGetTaskQuery("");

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  useEffect(() => {
    if (projects) {
      setFilteredProjects(projects);

      const formattedDatesArray = projects.map((project: Project) => {
        const startDate = formatDate({
          dateString: project.startDate,
          options: { month: "short", day: "numeric" },
        });

        const targetDate = formatDate({
          dateString: project.targetDate,
          options: { month: "short", day: "numeric" },
        });

        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [projects]);

  // if (!tasks || !filteredProjects) {
  //   return <Loader />;
  // }

  function toggleProjects(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
    setComponentVisible(!isComponentVisible);
  }

  const onFilter = (filterType: string) => {
    let filteredProjects = projects;

    switch (filterType) {
      case "all":
        setFilteredProjects(filteredProjects);
        break;
      case "active":
        filteredProjects = projects.filter(
          (project: Project) => project.status === "active",
        );
        break;
      case "closed":
        filteredProjects = projects.filter(
          (project: Project) => project.status === "closed",
        );
        break;
      case "on hold":
        filteredProjects = projects.filter(
          (project: Project) => project.status === "on hold",
        );
        break;
      default:
        setFilteredProjects(projects);
    }

    setFilteredProjects(filteredProjects);
  };

  return (
    <>
      {isLoading && <Loader />}
      {loading && <Loader />}
      {!projects?.length || !filteredProjects ? (
        <Column>
          <HeaderTitle title="Projects" active={true} />
          <SearchBar />
          <></>
          <div className="flex justify-center m-auto lg:h-[670px] pb-20 lg:pb-0">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-col items-center justify-center">
                <FileFolderIcon />
                <p className="text-gray-600 text-sm lg:text-base mt-6 lg:mt-7">
                  No current active projects
                </p>
                <p className="text-gray-600 text-sm lg:text-base lg:mt-2">
                  Create a project to get started
                </p>
                <Link
                  to="/projects/create"
                  className="hidden lg:flex justify-center items-center rounded-md border border-dashed border-orange-500 px-16 py-4 text-sm lg:text-base text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-8"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  <p>Create project</p>
                </Link>
              </div>
            </div>
          </div>
        </Column>
      ) : (
        <>
          <TwoColumns>
            <HeaderTitle title="Projects" active={true} />
            <SearchBar />
            <div className="flex justify-between">
              <ButtonGroup
                titles={["all", "active", "closed", "on hold"]}
                onFilter={onFilter}
              />
              <div className="flex gap-4">
                <div className="hidden lg:block">
                  <ButtonGroup titles={["list"]} onFilter={onFilter} />
                </div>
                <FilterButton />
              </div>
            </div>

            <ProjectList
              projects={filteredProjects || projects || []} // Provide an empty array if filteredProjects is undefined
              projectIndex={projectIndex}
              toggleProjects={toggleProjects}
              formattedDates={formattedDates}
              isVisible={isComponentVisible}
            />

            {projectIndex === undefined ? (
              <div className="hidden lg:flex flex-col items-center justify-center h-full">
                <SelectItemIcon />
                <p className="text-gray-500 text-base mt-2">
                  Select a project to see it&apos;s details
                </p>
              </div>
            ) : (
              <>
                <ProjectDetails
                  projects={filteredProjects}
                  projectIndex={projectIndex}
                  id={filteredProjects[projectIndex]?.id}
                  tasks={tasks}
                  isVisible={isComponentVisible}
                />
              </>
            )}
          </TwoColumns>
        </>
      )}
    </>
  );
}
