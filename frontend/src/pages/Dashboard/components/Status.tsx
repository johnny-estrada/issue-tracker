import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { startOfWeek, endOfWeek, format } from "date-fns";

interface Project {
  hours: number;
}

interface Task {
  userId: string;
  status: string;
  targetDate: string;
}

interface IStatus {
  projects: Project[];
  projectIndex: number;
  tasks: Task[];
  userInfo: { id: string };
}

const Status = ({ projects, projectIndex, tasks, userInfo }: IStatus) => {
  const [projectComplete, setProjectComplete] = useState(0);
  // Get the start and end dates of the current week
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

  const formattedStartDate = format(startDate, "MMM dd");
  const formattedEndDate = format(endDate, "MMM dd");

  useEffect(() => {
    const userTasks =
      tasks?.filter(
        (task) =>
          task.userId === userInfo?.id &&
          projects[projectIndex].id === task.projectId,
      ) || [];
    const completedTasks = userTasks.filter((task) => task.status === "done");

    if (userTasks.length > 0) {
      setProjectComplete(
        Math.ceil((completedTasks.length / userTasks.length) * 100),
      );
    }
  }, [tasks, userInfo?.id, projects, projectIndex]);

  return (
    <>
      <div className="flex lg:justify-end items-center lg:flex-1">
        <div className="flex flex-col items-center lg:ring-1 lg:ring-gray-200 lg:py-5 h-full lg:shadow rounded-lg lg:mb-2 w-60 lg:min-w-[225px] lg:w-3/4">
          <header className="flex text-base leading-2 lg:leading-0 mb-2 lg:mb-1">
            {/* <ChevronLeftIcon className="h-5 w-5 mr-8" /> */}
            {`${formattedStartDate} - ${formattedEndDate}`}
            {/* <ChevronRightIcon className="h-5 w-5 ml-8" /> */}
          </header>
          <Link
            to="/tasks"
            className="hidden lg:inline underline text-xs text-orange-400 hover:text-orange-500 mb-5"
          >
            view all
          </Link>
          <div className="flex justify-center items-center rounded-full w-28 h-28 border-2 border-orange-500 mb-5">
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl">
                {projectComplete}
                <span className="text-xl">%</span>
              </p>
              <p className="text-xs">completed</p>
            </div>
          </div>

          <p className="text-sm text-neutral-900 font-semibold line-clamp-1">
            You&apos;re doing good!
          </p>
          <p className="text-sm text-gray-600 line-clamp-1">
            You almost reached your goal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Status;
