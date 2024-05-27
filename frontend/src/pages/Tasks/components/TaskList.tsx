import { useState, useEffect, SyntheticEvent } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { formatDate } from "../../../utils/formatting";
import SelectorList from "../../../components/ui/SelectorList";
import FlatBadge from "../../../components/ui/FlatBadge";
import Loader from "../../../components/ui/Loader";
import AvatarGroup from "../../../components/ui/AvatarGroup";

interface Task {
  id: string & number;
  name: string;
  priority: string;
  status: string;
  startDate: string;
  targetDate: string;
}

interface Props {
  projects: object[];
  tasks: Task[];
  taskId: number | undefined;
  taskIndex: number | undefined;
  toggleTasks: (e: SyntheticEvent) => void;
  isLoading: boolean;
}

const TaskList = ({
  projects,
  tasks,
  taskId,
  taskIndex,
  toggleTasks,
  isLoading,
}: Props) => {
  const [sortedTasks, setSortedTasks] = useState<{ [key: string]: Task[] }>({});
  const [team, _setTeam] = useState([]);

  useEffect(() => {
    // Sort tasks by status
    const sorted =
      tasks?.reduce<{ [key: string]: Task[] }>((acc, task) => {
        const status = task.status;
        acc[status] = acc[status] || [];
        acc[status].push(task);
        return acc;
      }, {}) || {};

    setSortedTasks(sorted);
  }, [tasks, projects, taskIndex]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="mb-24 lg:mb-0 relative">
          <header className="flex justify-between align-middle">
            <div className="lg:flex items-center my-4 lg:my-0 mt-4 lg:mt-0 hidden lg:absolute right-0 top-0">
              <button className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
              </button>
              <button className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </header>

          {Object?.keys(sortedTasks).map((status) => (
            <div
              key={status}
              className="flex flex-col justify-center gap-3 pt-6 lg:pt-0 lg:m-0 lg:mb-8"
              style={{ marginTop: "0px" }}
            >
              <h2 className="sr-only" id="tasks">
                {status}
              </h2>

              <h2 className="text-xl lg:text-2xl lg:mb-4">{status}</h2>

              {sortedTasks[status]?.map((task: Task) => (
                <SelectorList
                  key={task?.id}
                  id={task?.id}
                  active={Number(task.id) === taskId}
                  onClick={(e) => toggleTasks(e)}
                >
                  <div className="flex flex-1 flex-col items-start justify-center gap-x-4 ml-4">
                    <p className="mt-1 text-sm leading-5">{`TSK-${task?.id}`}</p>
                    <p className="text-base leading-6 line-clamp-1 text-left">
                      {task?.name}
                    </p>
                  </div>
                  <div className="flex justify-center mr-4">
                    <div className="hidden lg:flex shrink-0 items-center gap-x-4 mr-3">
                      {!team ? (
                        <>
                          {" "}
                          <AvatarGroup members={team} />
                        </>
                      ) : (
                        <>
                          {" "}
                          <UserCircleIcon
                            className="h-6 w-6 lg:h-8 lg:w-8 text-gray-300"
                            aria-hidden="true"
                          />
                        </>
                      )}

                      <FlatBadge priority={task?.priority} />
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-sm hidden lg:block">
                        {formatDate({
                          dateString: task.startDate,
                          options: { month: "short", day: "numeric" },
                        })}{" "}
                        -
                        {formatDate({
                          dateString: task.targetDate,
                          options: { month: "short", day: "numeric" },
                        })}
                      </p>
                      <ChevronRightIcon className="w-4 h-4 lg:hidden" />
                    </div>
                  </div>
                </SelectorList>
              ))}
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default TaskList;
