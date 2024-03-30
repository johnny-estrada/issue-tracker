import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import FlatBadge from "../../../components/ui/FlatBadge";

interface Props {
  tasks: object[];
  id: string;
}

const TasksList = ({ tasks, id }: Props) => {
  return (
    <section
      aria-labelledby="tasks"
      className="flex flex-col gap-3 text-sm h-1/3 flex-grow"
    >
      <header className="flex items-baseline gap-3">
        <h3 className="sr-only" id="tasks">
          Tasks
        </h3>
        <h3 className="text-xl lg:text-2xl pb-4">Tasks</h3>
        <Link
          to="/tasks"
          className="underline text-xs text-orange-400 hover:text-orange-500"
        >
          view all
        </Link>
      </header>
      <ul>
        {tasks?.map(
          (item) =>
            item.projectId === id && (
              <Link key={item.id} to={`/tasks/${item.id}`}>
                <li className="flex cursor-pointer justify-between mb-3 gap-x-6 px-2 py-2 hover:bg-gray-200 sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5 mr-9">
                  <div className="flex flex-col justify-center min-w-0 m-1">
                    <p className=" mt-1 flex text-sm text-gray-400">
                      <span className="inset-x-0 -top-px bottom-0" />
                      TSK-
                      {item.id}
                    </p>
                    <p className="text-base line-clamp-1">{item.name}</p>
                  </div>

                  <div className="flex justify-center shrink-0 items-center gap-x-4 m-1">
                    <FlatBadge priority={item.priority} />
                    <span className="text-gray-400">
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </li>
              </Link>
            ),
        )}
      </ul>
    </section>
  );
};

export default TasksList;
