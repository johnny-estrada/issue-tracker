import { formatDate } from "../../../utils/formatting";
import noData from "../../../assets/icons/state/empty-clipboards.svg";
import FlatBadge from "../../../components/ui/FlatBadge";
import TaskMenu from "../../../components/ui/TaskMenu";
import Attachments from "./Attachments";
import ActivityLog from "./ActivityLog";

interface Task {
  id: string & number;
  name: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  projectId: number;
  startDate: string;
  targetDate: string;
}

interface Project {
  projects: object[];
  team: object[];
  photo: string;
  id: number;
  client: string;
}

interface Users {
  users: object[];
  id: number;
  name: string;
}

interface Props {
  tasks: Task[];
  taskIndex: number;
  projects: Project[];
  users: Users[];
  taskId: string;
  userId: number;
  refetch: () => void;
}

const Details = ({
  tasks,
  projects,
  users,
  taskId,
  userId,
  taskIndex,
  refetch,
}: Props) => {
  // const taskIndex = tasks?.findIndex((task) => task.projectId);

  // Task details dates
  const startDate = formatDate({
    dateString: tasks[taskIndex].startDate,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  const targetDate = formatDate({
    dateString: tasks[taskIndex].targetDate,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  // Activity Log Dates
  const created = formatDate({
    dateString: tasks[taskIndex].createdAt,
    options: { month: "short", day: "numeric", year: "numeric" },
  });
  const updated = formatDate({
    dateString: tasks[taskIndex].updatedAt,
    options: { month: "short", day: "numeric", year: "numeric" },
  });

  const userIndex = users?.findIndex(
    (user) => user.id === tasks[taskIndex].userId,
  );

  if (!users) {
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

          <TaskMenu id={taskId} tasks={tasks} refetch={refetch} />
        </div>
        <div className="w-2/3 lg:mb-10">
          {tasks?.length > 0 ? (
            <ul>
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
