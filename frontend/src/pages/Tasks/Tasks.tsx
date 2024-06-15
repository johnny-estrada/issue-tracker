import { useState, useEffect, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";
import { formatDate } from "../../utils/formatting";

import Column from "../../layout/Column";
import TwoColumns from "../../layout/TwoColumns";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import SearchBar from "../../components/ui/header/SearchBar";
import ButtonGroup from "../../components/ui/header/ButtonGroup";
import FilterButton from "../../components/ui/header/FilterButton";

import Loader from "../../components/ui/Loader";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import LabeledSelect from "../../components/form/LabeledSelect";

import { useAppSelector } from "../../hooks/hooks";
import CreateTaskIcon from "./components/CreateTaskIcon";
import SelectItemIcon from "./components/SelectItemIcon";
import { PlusIcon } from "@heroicons/react/24/solid";

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
  const [formattedDates, setFormattedDates] = useState<FormattedDates[]>([]);

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
  }, [tasks]);

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
      {!tasks?.length || !projects || !projects[0] ? (
        <Column>
          <HeaderTitle title="Tasks" active={true} />
          <SearchBar />
          <></>
          <div className="flex justify-center m-auto lg:h-[670px] pb-20 lg:pb-0">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-col items-center justify-center">
                <CreateTaskIcon />
                <p className="text-gray-600 text-sm lg:text-base mt-1">
                  No current active tasks
                </p>
                <p className="text-gray-600 text-sm lg:text-base lg:mt-2">
                  Create a task to get started
                </p>
                <Link
                  to="/tasks/create"
                  className="hidden lg:flex justify-center items-center rounded-md border border-dashed border-orange-500 px-16 py-4 text-sm lg:text-base text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-8"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  <p>Create tasks</p>
                </Link>
              </div>
            </div>
          </div>
        </Column>
      ) : (
        <>
          <TwoColumns>
            <HeaderTitle title="Tasks" active={true} />
            <SearchBar />
            <div className="flex justify-between">
              <div className="flex gap-6">
                <ButtonGroup titles={buttonName} onFilter={() => {}} />
                <LabeledSelect
                  label="Sort by:"
                  options={[
                    "status",
                    "priority",
                    "name: a to z",
                    "name: z to a",
                  ]}
                />
              </div>

              <FilterButton />
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
              <div className="hidden lg:flex flex-col items-center justify-center h-full pb-32">
                <SelectItemIcon />
                <p className="text-gray-600 text-base mt-6 tracking-wide">
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
