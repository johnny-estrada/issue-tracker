import { useState, useEffect } from "react";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import SearchBar from "../../components/header/SearchBar";
import Search from "../../components/header/Search";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/header/HeaderTitle";
import LineChart from "./components/LineChart";
import MyTask from "./components/MyTask";
import MyProjects from "./components/MyProjects";
import TwoColumnsWide from "../../layout/TwoColumnsWide";
import { useSelector } from "react-redux";

// data
import { lineChart } from "../../data/index";
import Status from "./components/Status";

const Dashboard = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const [formattedDates, setFormattedDates] = useState([]);
  const [lineChartData, setLineChartData] = useState(lineChart);
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery("");
  const { data: tasks } = useGetTaskQuery("");

  const { userInfo } = useSelector((state) => state.auth);

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

  // console.log(projects[projectIndex]?.id)

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

  function search(text) {
    alert(text);
  }

  return (
    <>
      <TwoColumnsWide>
        <HeaderTitle title="Dashboard" />
        <SearchBar search={search} />
        <DataDisplay projects={projects} projectIndex={projectIndex} />

        <MyTask
          formattedDates={formattedDates}
          id={tasks[projectIndex].id}
          refetch={refetch}
          projectIndex={projectIndex}
          projects={projects}
          tasks={tasks}
          dates={formattedDates}
          lineChartData={lineChart}
        />

        <section
          aria-labelledby="statistics"
          className="flex justify-between flex-wrap"
        >
          <div className="flex flex-1 flex-col">
            <header>
              <h2 className="sr-only" id="statistics">
                Statistics
              </h2>
              <h2 className="text-2xl">Statistics</h2>
              <p className="mb-5 text-sm  text-neutral-500">
                tasks created vs tasks completed
              </p>
            </header>

            <LineChart data={lineChartData} />
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
