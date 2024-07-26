import { useState, useEffect, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { formatDate } from "../../utils/formatting";
import { useAppSelector } from "../../hooks/hooks";
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
import useUserData from "../../hooks/useCurrentUser";
import Column from "../../layout/Column";
import WelcomeImg from "./components/WelcomeImg";
import { formatName } from "../../utils/formatting";
// data
import { lineChart } from "../../data/index";
import { PlusIcon } from "@heroicons/react/24/solid";

interface Project {
  startDate: string;
  targetDate: string;
}

const Dashboard = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [lineChartData, _setLineChartData] = useState(lineChart);
  const currentUser = useUserData();
  console.log(currentUser.name, currentUser.id);
  const { data: projects, isLoading, refetch } = useGetProjectsQuery("");
  const { data: tasks, isLoading: loading } = useGetTaskQuery("");

  const { userInfo } = useAppSelector((state) => state.auth);

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

  function toggleTasks(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);
    setTaskIndex(i);
  }

  // if (!tasks || !tasks[projectIndex]) {
  //   return <Loader />;
  // }

  // if (projects || projects[projectIndex]) {
  //   return <Loader />;
  // }

  return (
    <>
      {isLoading && <Loader />}
      {loading && <Loader />}
      {!tasks || !tasks[taskIndex] || !projects || !projects[projectIndex] ? (
        <Column>
          <HeaderTitle title="Dashboard" active={true} />
          <SearchBar />
          <></>
          <div className="flex justify-center m-auto h-full lg:h-[670px] pb-20">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-slate-800 font-semibold text-lg lg:text-xl mt-1 lg:mt-8 tracking-wide">
                  Welcome to Klarity
                </h4>
                <p className="text-slate-600 text-sm lg:text-base mt-1 lg:mt-2 mb-8 tracking-wide">
                  Create a project to get started
                </p>
                <WelcomeImg />
                <Link
                  to="/projects/create"
                  className="hidden lg:flex justify-center items-center rounded-md border border-dashed border-orange-500 px-16 py-4 text-sm lg:text-base text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-10"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  <p className="tracking-wide">Create project</p>
                </Link>
              </div>
            </div>
          </div>
        </Column>
      ) : (
        <TwoColumnsWide>
          <HeaderTitle title="Dashboard" active={true} />
          <SearchBar />
          <DataDisplay
            projects={projects}
            projectIndex={projectIndex}
            tasks={tasks}
            userInfo={userInfo}
            refetch={refetch}
          />

          <div>
            <Tabs
              data={lineChartData}
              projectData={projects}
              tasks={tasks}
              toggleTasks={toggleTasks}
              userInfo={userInfo}
            />
            <MyTask
              id={tasks[taskIndex].id}
              refetch={refetch}
              projectIndex={projectIndex}
              projects={projects}
              tasks={tasks}
              dates={formattedDates}
              userInfo={userInfo}
            />
          </div>

          <section aria-labelledby="statistics" className="flex mb-5 w-full">
            <div className="flex flex-1 flex-col">
              <header>
                <h2 className="sr-only tracking-wide" id="statistics">
                  Statistics
                </h2>
                <h2 className="text-2xl mb-1">Statistics</h2>
                <p className="lg:mb-4 text-sm  text-neutral-500 tracking-wide">
                  tasks created vs tasks completed
                </p>
              </header>

              <LineChart />
            </div>

            <Status
              projects={projects}
              projectIndex={projectIndex}
              tasks={tasks}
              userInfo={userInfo}
            />
          </section>
          <MyProjects
            id={projects[projectIndex]?.id}
            userInfo={userInfo}
            refetch={refetch}
            projectIndex={projectIndex}
            projects={projects}
            tasks={tasks}
            toggleProjects={toggleProjects}
            toggleTasks={toggleTasks}
            formattedDates={formattedDates}
          />
        </TwoColumnsWide>
      )}
    </>
  );
};

export default Dashboard;
