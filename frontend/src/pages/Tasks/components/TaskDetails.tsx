import { NavLink } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import FlatBadge from "../../../components/ui/FlatBadge";
import { formatDate } from "../../../utils/formatting";
import Attachments from "./Attachments";
import ActivityLog from "./ActivityLog";
import noData from "../../../assets/icons/state/empty-clipboards.svg";

interface Props {
  tasks: object[];
  taskIndex: number;
  projects: object[];
  formattedDate1: string;
  formattedDate2: string;
  users: object[];
  taskId: number;
  userId: number;
}

const TaskDetails = ({
  tasks,
  taskIndex,
  projects,
  formattedDate1,
  formattedDate2,
  users,
  taskId,
  userId,
}: Props) => {
  const userIndex = users?.findIndex(
    (user) => user.id === tasks[taskIndex].userId,
  );

  // console.log(task1);
  // console.log(tasks[taskIndex].userId); // 4

  const created = formatDate(tasks[taskIndex].createdAt, {
    month: "short",
    day: "numeric",
    year: "numeric",
    time: "numeric",
  });

  const updated = formatDate(tasks[taskIndex].updatedAt, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!users) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

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
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                    src={projects[0].team[0].photo}
                    alt=""
                  />
                  <p className="text-sm">{projects[0].team[0].name}</p>
                </div>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Start date</h4>
                <p className="text-sm">{formattedDate1}</p>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Target date</h4>
                <p className="text-sm">{formattedDate2}</p>
              </li>
              <li className="flex items-center py-2 w-64">
                <h4 className="text-sm text-neutral-500 w-36">Project</h4>
                <p className="flex-1 text-sm w-60 line-clamp-1">
                  {
                    projects?.find(
                      (project) => tasks[taskIndex]?.projectId === project.id,
                    )?.client
                  }
                </p>
              </li>
            </ul>
          ) : (
            <div className="flex flex-col justify-center items-center mt-10">
              <img src={noData} alt="" className="w-36 mb-3" />
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
