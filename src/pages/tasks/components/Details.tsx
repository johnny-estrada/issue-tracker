import FlatBadge from "../../../components/ui/FlatBadge";
import { formatDate } from "../../../utils/formatting";
import Attachments from "./Attachments";
import ActivityLog from "./ActivityLog";
import noData from "../../../assets/images/no-data.svg";
import TaskMenu from "../../../components/ui/TaskMenu";

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

const Details = ({
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

  let b = tasks?.findIndex((task) => task.projectId);
  console.log(tasks[taskIndex].projectId);

  // console.log(tasks[taskIndex].userId); // 4

  const created = formatDate(tasks[taskIndex].createdAt, {
    month: "short",
    day: "numeric",
    year: "numeric",
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
            <FlatBadge priority={`ID LG-${taskId}`} />
          </div>

          <TaskMenu id={taskId} tasks={tasks} />
        </div>
        <div className="w-2/3 lg:mb-10">
          {tasks?.length > 0 ? (
            <ul>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Name</h4>
                <p className="text-sm line-clamp-1">{tasks[taskIndex]?.name}</p>
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Status</h4>
                <p className="text-sm">{tasks[taskIndex]?.status}</p>
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Priority</h4>

                <FlatBadge priority={tasks[taskIndex]?.priority} />
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Assignee</h4>
                <div className="flex gap-3">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={projects[0].team[0].photo}
                    alt=""
                  />
                  <p className="text-sm">{projects[0].team[0].name}</p>
                </div>
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Start date</h4>
                <p className="text-sm">{formattedDate1}</p>
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Target date</h4>
                <p className="text-sm">{formattedDate2}</p>
              </li>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Project</h4>
                <p className="text-sm line-clamp-1">
                  {
                    projects?.find(
                      (project) => project.id === tasks[taskIndex]?.projectId,
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

export default Details;
