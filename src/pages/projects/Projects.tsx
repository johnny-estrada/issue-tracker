import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { formatDate } from "../../utils/formatting";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import Loader from "../../components/ui/Loader";
import TwoColumns from "../../layout/TwoColumns";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";

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

  return (
    <>
      <TwoColumns>
        <HeaderTitle title={title} />
        <div className="flex justify-between">
          <ButtonGroup titles={["all", "active", "closed", "on hold"]} />
          <FilterButton />
        </div>

        <ProjectList
          projects={projects}
          projectIndex={projectIndex}
          toggleProjects={toggleProjects}
          formattedDates={formattedDates}
        />

        <ProjectDetails
          projects={projects}
          projectIndex={projectIndex}
          refetch={refetch}
          id={projects[projectIndex].id}
          tasks={tasks}
        />
      </TwoColumns>
    </>
  );
}

export default Projects;
