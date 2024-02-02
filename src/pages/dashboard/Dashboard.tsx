import { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import Header from "../../components/header/Header";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/header/HeaderTitle";
import LineChart from "./components/LineChart";
import BarCharts from "./components/BarCharts";
import Sidebar from "../../components/sidebar/Sidebar";
import Tabs from "../../components/ui/Tabs";
import MyTask from "./components/MyTask";
import MyProjects from "./components/MyProjects";

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
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title={title} />
          <DataDisplay projects={projects} />
        </Header>
        <Tabs data={lineChart} projectData={projects} />
        <main className="lg:flex lg:h-screen gap-10 lg:px-14 lg:pt-10 hidden">
          <div className="w-1/3 mb-auto">
            <MyTask
              id={tasks[projectIndex].id}
              refetch={refetch}
              projectIndex={projectIndex}
              projects={projects}
              tasks={tasks}
              dates={formattedDates}
            />
          </div>

          <div className="flex-1 mb-auto">
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
              dates={formattedDates}
              toggleProjects={toggleProjects}
              formattedDates={formattedDates}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
