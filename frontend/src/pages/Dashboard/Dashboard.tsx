import { useState, useEffect, SyntheticEvent } from "react";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import SearchBar from "../../components/ui/header/SearchBar";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import LineChart from "./components/LineChart";
import MyTask from "./components/MyTask";
import MyProjects from "./components/MyProjects";
import TwoColumnsWide from "../../layout/TwoColumnsWide";
import Tabs from "../../components/ui/Tabs";
import Status from "./components/Status";
import Loader from "../../components/ui/Loader";

// data
import {lineChart} from "../../data/index"

interface Project {
  startDate: string;
  targetDate: string;
}

const Dashboard = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [lineChartData, _setLineChartData] = useState(lineChart);
  const { data: projects, isLoading, refetch } = useGetProjectsQuery("");
  const { data: tasks, isLoading: loading } = useGetTaskQuery("");

  useEffect(() => {
    if (projects) {
      const formattedDatesArray = projects?.map((project: Project) => {
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

  function toggleProjects(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
  }

  if (!tasks || !tasks[projectIndex]) {
    return null;
  }

  if (!projects) {
    return null;
  }

  return (
    <>
      {isLoading && <Loader />}
      {loading && <Loader />}
      <TwoColumnsWide>
        <HeaderTitle title="Dashboard" />
        <SearchBar />
        <DataDisplay
          projects={projects}
          projectIndex={projectIndex}
          tasks={tasks}
        />

        <div>
          <Tabs data={lineChartData} projectData={projects} tasks={tasks} />
          <MyTask
            id={tasks[projectIndex].id}
            refetch={refetch}
            projectIndex={projectIndex}
            projects={projects}
            tasks={tasks}
            dates={formattedDates}
          />
        </div>

        <section aria-labelledby="statistics" className="flex mb-5 w-full">
          <div className="flex flex-1 flex-col">
            <header>
              <h2 className="sr-only" id="statistics">
                Statistics
              </h2>
              <h2 className="text-2xl mb-1">Statistics</h2>
              <p className="lg:mb-4 text-sm  text-neutral-500">
                tasks created vs tasks completed
              </p>
            </header>

            <LineChart />
          </div>

          <Status />
        </section>

        <MyProjects
          id={projects[projectIndex]?.id}
          refetch={refetch}
          projectIndex={projectIndex}
          projects={projects}
          tasks={tasks}
          toggleProjects={toggleProjects}
          formattedDates={formattedDates}
        />
      </TwoColumnsWide>
    </>
  );
};

export default Dashboard;
