import { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/header/HeaderTitle";
import LineChart from "./components/LineChart";
import BarCharts from "./components/BarCharts";
import MyTask from "./components/MyTask";
import MyProjects from "./components/MyProjects";
import TwoColumnsWide from "../../layout/TwoColumnsWide";

interface Props {
  lineChartData: object[];
  barChartData: object[];
}

const Dashboard = ({ lineChartData, barChartData }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [lineChart, setLineChart] = useState(lineChartData);
  const [barChart, setBarChart] = useState(barChartData);
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery();
  const { data: tasks } = useGetTaskQuery();

  useEffect(() => {
    if (projects) {
      const formattedDatesArray = projects?.map((project) => {
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

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
  }

  if (!tasks || !tasks[projectIndex]) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  if (!projects) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  const title = "Dashboard";

  return (
    <>
      <TwoColumnsWide>
        <HeaderTitle title={title} />
        <DataDisplay projects={projects} />

        <MyTask
          id={tasks[projectIndex].id}
          refetch={refetch}
          projectIndex={projectIndex}
          projects={projects}
          tasks={tasks}
          dates={formattedDates}
        />

        <section aria-labelledby="statistics">
          <header>
            <h2 className="sr-only" id="statistics">
              Statistics
            </h2>
            <h2 className="text-2xl">Statistics</h2>
            <p className="mb-5 text-sm  text-neutral-500">
              tasks created vs tasks completed
            </p>
          </header>

          <div className="flex">
            <LineChart data={lineChart} />
            <BarCharts data={barChart} />
          </div>
        </section>

        <MyProjects
          id={tasks[projectIndex].id}
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
