import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";

import Header from "../../components/header/Header";
import DataDisplay from "./components/DataDisplay";
import HeaderTitle from "../../components/header/HeaderTitle";
import ShowHideList from "./components/ShowHideList";
import LineChart from "./components/LineChart";
import BarCharts from "./components/BarCharts";
import SelectorList from "../../components/ui/SelectorList";
import AvatarGroup from "../../components/ui/AvatarGroup";
import TaskMenu from "../../components/ui/TaskMenu";
import Sidebar from "../../components/sidebar/Sidebar";
import Tabs from "../../components/ui/Tabs";
import ListMenu from "../../components/ui/ListMenu";

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

  const projectList = projects?.map((project, idx) => (
    <SelectorList
      key={project.id}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white text-black">
          <p>BK</p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-base">{project.client}</p>
          <p className=" mt-1 flex text-xs leading-5 text-gray-400">
            <span className="inset-x-0 -top-px bottom-0" />
            {/* {project.tasksList.length} tasks &#x2022; {project.overdue} overdue */}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <AvatarGroup members={project.team} />
        <p className="text-gray-400">
          {formattedDates[idx]?.startDate} - {formattedDates[idx]?.targetDate}
        </p>
      </div>
    </SelectorList>
  ));

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
            <section aria-labelledby="projects">
              <header className="hidden lg:flex justify-between pb-5">
                <div className="flex items-baseline gap-3">
                  <h2 className="sr-only" id="tasks">
                    My tasks
                  </h2>
                  <h2 className="text-2xl">My tasks</h2>
                  <Link
                    to="/tasks"
                    className="underline text-xs text-orange-400 hover:text-orange-500"
                  >
                    view all
                  </Link>
                </div>

                <TaskMenu id={tasks[projectIndex].id} refetch={refetch} />
              </header>

              <ShowHideList
                projectIndex={projectIndex}
                projects={projects}
                tasks={tasks}
                dates={formattedDates}
              />
            </section>
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

            <section aria-labelledby="projects">
              <header className="flex  justify-between">
                <div className="flex items-baseline gap-3">
                  <h2 className="sr-only" id="projects">
                    My projects
                  </h2>
                  <h2 className="text-2xl">My projects</h2>
                  <Link
                    to="/projects"
                    className="underline text-xs text-orange-400 hover:text-orange-500"
                  >
                    view all
                  </Link>
                </div>

                <ListMenu />
              </header>
              <div className="flex flex-col gap-3 overflow-hidden rounded-lg px-1 py-4">
                {projectList}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
