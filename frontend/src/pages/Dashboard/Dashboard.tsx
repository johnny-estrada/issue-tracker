import { useState, useEffect, SyntheticEvent } from "react";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import SearchBar from "../../components/header/SearchBar";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/header/HeaderTitle";
import LineChart from "./components/LineChart";
import MyTask from "./components/MyTask";
import MyProjects from "./components/MyProjects";
import TwoColumnsWide from "../../layout/TwoColumnsWide";
// import Calendar from "./components/Calendar";
import Tabs from "../../components/ui/Tabs";
import Status from "./components/Status";

// data
import { lineChart } from "../../data/index";

interface Project {
  startDate: string;
  targetDate: string;
}

const Dashboard = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [lineChartData, _setLineChartData] = useState(lineChart);
  const { data: projects, refetch } = useGetProjectsQuery("");
  const { data: tasks } = useGetTaskQuery("");

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
      <TwoColumnsWide>
        <HeaderTitle title="Dashboard" />
        <SearchBar />
        <DataDisplay projects={projects} projectIndex={projectIndex} />

        <div>
          <Tabs data={lineChartData} projectData={projects} />
          <MyTask
            id={tasks[projectIndex].id}
            refetch={refetch}
            projectIndex={projectIndex}
            projects={projects}
            tasks={tasks}
            dates={formattedDates}
          />
        </div>

        <section aria-labelledby="statistics" className="flex flex-wrap">
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

          {/* <Calendar /> */}
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
