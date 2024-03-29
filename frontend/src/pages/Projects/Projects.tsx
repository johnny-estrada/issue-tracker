import { useState, useEffect, SyntheticEvent } from "react";
import { toast } from "react-toastify";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";

import TwoColumns from "../../layout/TwoColumns";
import Column from "../../layout/Column";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";

import Loader from "../../components/ui/Loader";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import SearchBar from "../../components/header/SearchBar";
import selectProject from "../../assets/images/icons/state/select-item.svg";
import projectImg from "../../assets/images/icons/state/file-folder.svg";

export default function Projects() {
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery("");
  const { data: tasks, isLoading: loading } = useGetTaskQuery("");

  const [projectIndex, setProjectIndex] = useState();
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [formattedDates, setFormattedDates] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(true);

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  useEffect(() => {
    if (projects) {
      setFilteredProjects(projects);

      const formattedDatesArray = projects.map((project: object) => {
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

  const onClick = (event: SyntheticEvent) => {
    // Toggle the visibility state when the button is clicked
    toggleProjects(event);
  };

  function toggleProjects(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
    setComponentVisibility(!isComponentVisible);
  }

  const onFilter = (filterType: string) => {
    let filteredProjects: object[] = projects;

    switch (filterType) {
      case "all":
        setFilteredProjects(filteredProjects);
        break;
      case "active":
        filteredProjects = projects.filter(
          (project: object) => project.status === "active",
        );
        break;
      case "closed":
        filteredProjects = projects.filter(
          (project: object) => project.status === "closed",
        );
        break;
      case "on hold":
        filteredProjects = projects.filter(
          (project: object) => project.status === "on hold",
        );
        break;
      default:
        setFilteredProjects(projects);
    }

    setFilteredProjects(filteredProjects);
  };

  function search(text) {
    alert(text);
  }

  if (!tasks) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  if (!filteredProjects) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  return (
    <>
      {isLoading && <Loader />}
      {loading && <Loader />}
      {error && <div>{error?.data?.message || error.error}</div>}
      {!projects?.length ? (
        <Column>
          <HeaderTitle title="Projects" />
          <SearchBar search={search} />
          <div className="flex justify-between">
            <ButtonGroup
              titles={["all", "active", "closed", "on hold"]}
              onFilter={onFilter}
            />
            <div className="flex gap-4">
              <ButtonGroup titles={["list", "timeline"]} onFilter={onFilter} />
              <FilterButton />
            </div>
          </div>
          <div className="flex justify-center m-auto items-center h-screen -mt-36">
            <div className="flex flex-col items-end justify-center h-full">
              <div className="flex flex-col items-center justify-center">
                <img src={projectImg} alt="" className="w-32 lg:w-56" />
                <p className="text-gray-500 text-sm lg:text-base mt-1 lg:mt-2">
                  No current active projects
                </p>
                <p className="text-gray-500 text-sm lg:text-base lg:mt-2">
                  Create a project to get started
                </p>
              </div>
            </div>
          </div>
        </Column>
      ) : (
        <>
          <TwoColumns>
            <HeaderTitle title="Projects" />
            <SearchBar search={search} />
            <div className="flex justify-between">
              <ButtonGroup
                titles={["all", "active", "closed", "on hold"]}
                onFilter={onFilter}
              />
              <div className="flex gap-4">
                <div className="hidden lg:block">
                  <ButtonGroup
                    titles={["list", "timeline"]}
                    onFilter={onFilter}
                  />
                </div>
                <FilterButton />
              </div>
            </div>

            <ProjectList
              isComponentVisible={isComponentVisible}
              onClick={onClick}
              refetch={refetch}
              projects={filteredProjects || projects || []} // Provide an empty array if filteredProjects is undefined
              projectIndex={projectIndex}
              toggleProjects={toggleProjects}
              formattedDates={formattedDates}
            />

            {projectIndex === undefined ? (
              <div className="hidden lg:flex flex-col items-center justify-center h-full">
                <img src={selectProject} alt="" className="w-56" />
                <p className="text-gray-500 text-base mt-2">
                  Select a project to see it&apos;s details
                </p>
              </div>
            ) : (
              <>
                <ProjectDetails
                  isComponentVisible={isComponentVisible}
                  projects={filteredProjects}
                  projectIndex={projectIndex}
                  refetch={refetch}
                  id={filteredProjects[projectIndex]?.id}
                  tasks={tasks}
                />
              </>
            )}
          </TwoColumns>
        </>
      )}
    </>
  );
}
