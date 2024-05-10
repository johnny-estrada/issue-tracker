import { NavLink } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { formatDate } from "../../../utils/formatting";

import FlatBadge from "../../../components/ui/FlatBadge";
import Attachments from "./Attachments";
import ActivityLog from "./ActivityLog";

interface Task {
  tasks: object[];
  id: string & number;
  name: string;
  priority: string;
  status: string;
  startDate: string;
  targetDate: string;
  taskIndex: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  projectId: number;
}

interface Project {
  team: object[];
  id: number;
  client: string;
}

interface User {
  users: object[];
  id: number;
  name: string;
}

interface Props {
  tasks: Task[];
  taskIndex: number;
  projects: Project[];
  users: User[];
  taskId: number;
  userId: number;
}

const TaskDetails = ({
  tasks,
  taskIndex,
  projects,
  users,
  taskId,
  userId,
}: Props) => {
  if (!users) {
    return null;
  }

  const userIndex = users?.findIndex(
    (user) => user.id === tasks[taskIndex].userId,
  );

  const startDate = formatDate({
    dateString: tasks[taskIndex].startDate,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  const targetDate = formatDate({
    dateString: tasks[taskIndex].targetDate,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  const created = formatDate({
    dateString: tasks[taskIndex].createdAt,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  const updated = formatDate({
    dateString: tasks[taskIndex].updatedAt,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  return (
    <>
      <section aria-labelledby="tasks" className="px-4">
        <h2 className="sr-only" id="tasks">
          All Tasks
        </h2>
        <div className="flex justify-between">
          <div className="flex gap-5 items-baseline">
            <h2 className="text-xl lg:text-2xl pb-4">Task details</h2>
            <FlatBadge priority={`ID LG-${tasks?.[taskIndex]?.id}`} />
          </div>

          <NavLink
            to={`/tasks/${tasks?.[taskIndex].id}`}
            className="rounded-full hover:bg-gray-50 w-10 align-middle p-2"
          >
            <span className="sr-only">Task details</span>
            <ArrowRightIcon
              className="w-4 h-4 m-auto transform -rotate-45 origin-top"
              aria-hidden="true"
            />
            <ArrowLeftIcon
              className="w-4 h-4 m-auto transform -rotate-45 origin-bottom-left"
              aria-hidden="true"
            />
          </NavLink>
        </div>
        <div className=" lg:mb-10">
          {tasks?.length > 0 ? (
            <ul className="w-2/3">
              <li className="flex justify-center py-2 items-center w-full">
                <h4 className="text-sm text-neutral-500 w-36">Name</h4>
                <p className="flex-1 text-sm w-64 line-clamp-1">
                  {tasks[taskIndex]?.name}
                </p>
              </li>
              <li className="flex justify-center items-center py-2 w-72">
                <h4 className="text-sm text-neutral-500 w-36">Status</h4>
                <p className="flex-1 text-sm w-64 line-clamp-1">
                  {tasks[taskIndex]?.status}
                </p>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Priority</h4>

                <FlatBadge priority={tasks[taskIndex]?.priority} />
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Assignee</h4>
                <div className="flex gap-3 items-center">
                  {/* <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                    src={projects[0].team[0].photo}
                    alt=""
                  />
                  <p className="text-sm">{projects[0].team[0].name}</p> */}
                </div>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Start date</h4>
                <p className="text-sm">{startDate}</p>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Target date</h4>
                <p className="text-sm">{targetDate}</p>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Project</h4>
                <p className="flex-1 text-sm w-60 line-clamp-1">
                  {
                    projects?.find(
                      (project: Project) =>
                        tasks[taskIndex]?.projectId === project.id,
                    )?.client
                  }
                </p>
              </li>
            </ul>
          ) : (
            <div className="flex flex-col justify-center items-center mt-10">
              <p>No task details available</p>
            </div>
          )}
        </div>
      </section>
      <Attachments
        taskId={taskId}
        userId={userId}
        taskIndex={taskIndex}
        tasks={tasks}
      />
      <ActivityLog
        created={created}
        users={users}
        userIndex={userIndex}
        updated={updated}
      />
    </>
  );
};

export default TaskDetails;
