import { NavLink } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import FlatBadge from "../../components/ui/FlatBadge";

const TaskDetails = ({
  tasks,
  taskIndex,
  projects,
  formattedDate1,
  formattedDate2,
}) => {
  return (
    <>
      <section aria-labelledby="tasks">
        <h2 className="sr-only" id="tasks">
          All Tasks
        </h2>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <h2 className="text-xl pb-4">Task details</h2>
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
        <div className="w-2/3">
          {tasks?.length > 0 ? (
            <ul>
              <li className="grid grid-cols-2 py-2 w-64">
                <h4 className="text-sm text-neutral-500">Name</h4>
                <p className="text-sm">{tasks[taskIndex]?.name}</p>
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
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <p className="text-sm">Fred S</p>
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
                <p className="text-sm">
                  {
                    projects?.find(
                      (project) => tasks[taskIndex]?.projectId === project.id,
                    )?.client
                  }
                </p>
              </li>
            </ul>
          ) : (
            <li>No task details available</li>
          )}
        </div>
      </section>
    </>
  );
};

export default TaskDetails;
