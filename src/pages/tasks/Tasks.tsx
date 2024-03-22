import { useState, useEffect, SyntheticEvent } from "react";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../services/state/redux/slices/usersApiSlice";
import { formatDate } from "../../utils/formatting";

import Column from "../../layout/Column";
import TwoColumns from "../../layout/TwoColumns";
import HeaderTitle from "../../components/header/HeaderTitle";
import SearchBar from "../../components/header/SearchBar";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";

import Loader from "../../components/ui/Loader";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import SortBy from "../../components/header/SortBy";

import projectSelect from "../../assets/images/project-select.svg";
import create from "../../assets/images/create.svg";
import { useSelector } from "react-redux";

const Tasks = () => {
  const { data: tasks, isLoading, error } = useGetTaskQuery("");
  const { data: projects } = useGetProjectsQuery("");

  const { data: users, isLoading1: loading } = useGetUsersQuery("");

  const [taskIndex, setTaskIndex] = useState();
  const [taskId, setTaskId] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const buttonName = ["list", "board"];

  useEffect(() => {
    const currentTask = tasks?.[taskIndex];

    if (currentTask) {
      const formatted1 = formatDate(currentTask.startDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate1(formatted1);

      const formatted2 = formatDate(currentTask.targetDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate2(formatted2);
    }

    if (tasks) {
      const formattedDatesArray = tasks.map((task) => {
        const startDate = formatDate(task.startDate, {
          month: "short",
          day: "numeric",
        });

        const targetDate = formatDate(task.targetDate, {
          month: "short",
          day: "numeric",
        });

        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [taskIndex, tasks]);

  function toggleTasks(e: SyntheticEvent) {
    const taskId = Number(e.currentTarget.id);
    const taskIndex = tasks?.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      setTaskIndex(taskIndex);
      setTaskId(taskId);
    }
  }

  function search(text) {
    alert(text);
  }

  let onFilter;

  return (
    <>
      {error && <div>{error?.data?.message || error.error}</div>}
      {!tasks?.length ? (
        <Column>
          <HeaderTitle title="All tasks" />
          <SearchBar search={search} />
          <div className="flex justify-between">
            <ButtonGroup
              titles={["all", "active", "closed", "on hold"]}
              onFilter={onFilter}
            />
            <div className="flex gap-4">
              <ButtonGroup titles={buttonName} />
              <SortBy />
            </div>
          </div>
          <div className="flex justify-center m-auto items-center h-screen -mt-36">
            <div className="flex flex-col items-end justify-center h-full">
              <div className="flex flex-col items-center justify-center">
                <img src={create} alt="" className="w-40 lg:w-64" />
                <p className="text-gray-500 text-sm lg:text-base mt-1 lg:mt-2">
                  No current active tasks
                </p>
                <p className="text-gray-500 text-sm lg:text-base lg:mt-2">
                  Create a task to get started
                </p>
              </div>
            </div>
          </div>
        </Column>
      ) : (
        <>
          <TwoColumns>
            <HeaderTitle title="All tasks" />
            <SearchBar search={search} />
            <div className="flex justify-between">
              <div className="flex gap-6">
                <ButtonGroup titles={buttonName} />
                <SortBy />
              </div>

              <FilterButton />
            </div>

            <>
              {isLoading && <Loader />}
              <TaskList
                projects={projects}
                error={error}
                taskId={taskId}
                isLoading={isLoading}
                tasks={tasks}
                taskIndex={taskIndex}
                toggleTasks={toggleTasks}
                formattedDates={formattedDates}
              />
            </>

            {taskIndex === undefined ? (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={projectSelect} alt="" className="w-56" />
                <p className="text-gray-500 text-base mt-2">
                  Select a task to see it&apos;s details
                </p>
              </div>
            ) : (
              <>
                <TaskDetails
                  userId={userInfo.id}
                  taskId={taskId}
                  users={users || undefined}
                  tasks={tasks}
                  taskIndex={taskIndex}
                  projects={projects}
                  formattedDate1={formattedDate1}
                  formattedDate2={formattedDate2}
                />
              </>
            )}
          </TwoColumns>
        </>
      )}
    </>
  );
};

export default Tasks;
