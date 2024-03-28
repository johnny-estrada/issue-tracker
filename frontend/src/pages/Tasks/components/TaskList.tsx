import { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SelectorList from "../../../components/ui/SelectorList";
import FlatBadge from "../../../components/ui/FlatBadge";
import Loader from "../../../components/ui/Loader";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import { formatDate } from "../../../utils/formatting";

interface Props {
  projects: object[];
  tasks: object[];
  taskId: number | undefined;
  taskIndex: number | undefined;
  toggleTasks: object;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}

const TaskList = ({
  projects,
  tasks,
  taskId,
  taskIndex,
  toggleTasks,
  isLoading,
  error,
}: Props) => {
  const [sortedTasks, setSortedTasks] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Sort tasks by status
    const sorted =
      tasks?.reduce((acc, task) => {
        const status = task.status;
        acc[status] = acc[status] || [];
        acc[status].push(task);
        return acc;
      }, {}) || {};

    setSortedTasks(sorted);

    const a = projects?.map((project) => {
      if (project.id === tasks[taskIndex]?.projectId) {
        setTeam(project.team);
      }
      console.log("no results");
    });
  }, [tasks, projects, taskIndex]);

  console.log(sortedTasks);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <section className="mb-96 lg:mb-0 relative">
          {/* Display ChevronRightIcon and ChevronLeftIcon once at the top */}
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
              className="flex flex-col justify-center gap-3 py-4 lg:py-0 m-4 lg:m-0 lg:mb-8"
              style={{ marginTop: "0px" }}
            >
              <h2 className="sr-only" id="tasks">
                {status}
              </h2>

              <h2 className="text-xl lg:text-2xl mb-4">{status}</h2>

              {sortedTasks[status]?.map((task) => (
                <SelectorList
                  key={task?.id}
                  id={task?.id}
                  active={task.id === taskId}
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
                      <AvatarGroup members={team} />
                      <FlatBadge priority={task?.priority} />
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-sm hidden lg:block">
                        {formatDate(task?.startDate, {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        -
                        {formatDate(task?.targetDate, {
                          month: "short",
                          day: "numeric",
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
