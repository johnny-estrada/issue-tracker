import { useState, useEffect, SyntheticEvent } from "react";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";
import { formatDate } from "../../utils/formatting";

import Column from "../../layout/Column";
import TwoColumns from "../../layout/TwoColumns";
import HeaderTitle from "../../components/header/HeaderTitle";
import SearchBar from "../../components/header/SearchBar";
import ButtonGroup from "../../components/header/ButtonGroup";
// import FilterButton from "../../components/header/FilterButton";

import Loader from "../../components/ui/Loader";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
// import SortBy from "../../components/header/SortBy";

import selectTask from "../../assets/icons/state/select-item.svg";
import create from "../../assets/icons/state/add-task.svg";
import { useAppSelector } from "../../hooks/hooks";

interface Task {
  id: number;
  startDate: string;
  targetDate: string;
  taskId: number;
  error: string;
}

interface FormattedDates {
  startDate: string;
  targetDate: string;
}

const Tasks = () => {
  const { data: tasks, isLoading } = useGetTaskQuery("");
  const { data: projects } = useGetProjectsQuery("");

  const { data: users } = useGetUsersQuery("");

  const [taskIndex, setTaskIndex] = useState();
  const [taskId, setTaskId] = useState(0);
  const [_formattedDates, setFormattedDates] = useState<FormattedDates[]>([]);

  const { userInfo } = useAppSelector((state) => state.auth);

  const buttonName = ["list"];

  useEffect(() => {
    if (tasks) {
      const formattedDatesArray = tasks.map((task: Task) => {
        const startDate = formatDate({
          dateString: task.startDate,
          options: { month: "short", day: "numeric" },
        });

        const targetDate = formatDate({
          dateString: task.targetDate,
          options: { month: "short", day: "numeric" },
        });
        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [taskIndex, tasks]);

  function toggleTasks(e: SyntheticEvent) {
    const taskId = Number(e.currentTarget.id);
    const taskIndex = tasks?.findIndex((task: Task) => task.id === taskId);

    if (taskIndex !== -1) {
      setTaskIndex(taskIndex);
      setTaskId(taskId);
    }
  }

  return (
    <>
      {!tasks?.length ? (
        <Column>
          <HeaderTitle title="Tasks" />
          <SearchBar />
          <div className="flex justify-between">
            <div className="flex gap-6">
              <ButtonGroup titles={buttonName} onFilter={() => {}} />
              {/* <SortBy /> */}
            </div>

            {/* <FilterButton /> */}
          </div>
          <div className="flex justify-center m-auto">
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
            <HeaderTitle title="Tasks" />
            <SearchBar />
            <div className="flex justify-between">
              <div className="flex gap-6">
                <ButtonGroup titles={buttonName} onFilter={() => {}} />
                {/* <SortBy /> */}
              </div>

              {/* <FilterButton /> */}
            </div>

            <>
              {isLoading && <Loader />}
              <TaskList
                projects={projects}
                taskId={taskId}
                isLoading={isLoading}
                tasks={tasks}
                taskIndex={taskIndex}
                toggleTasks={toggleTasks}
              />
            </>

            {taskIndex === undefined ? (
              <div className="hidden lg:flex flex-col items-center justify-center h-full">
                <img src={selectTask} alt="" className="w-56" />
                <p className="text-gray-500 text-base mt-2">
                  Select a task to see it&apos;s details
                </p>
              </div>
            ) : (
              <>
                <TaskDetails
                  userId={userInfo.id}
                  taskId={taskId || 0}
                  users={users || undefined}
                  tasks={tasks}
                  taskIndex={taskIndex || 0}
                  projects={projects}
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
