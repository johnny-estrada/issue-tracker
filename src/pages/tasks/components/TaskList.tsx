import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SelectorList from "../../../components/ui/SelectorList";
import FlatBadge from "../../../components/ui/FlatBadge";

const TaskList = ({ tasks, taskIndex, toggleTasks, formattedDates }) => {
  return (
    <>
      <section aria-labelledby="tasks">
        <h2 className="sr-only" id="tasks">
          All Tasks
        </h2>
        <div className="flex justify-between">
          <h2 className="text-xl pb-4">To do</h2>
          <div className="flex items-center">
            <a href="#" className="hover:bg-gray-50 rounded-full p-3">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#" className="hover:bg-gray-50 rounded-full p-3">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* TASKS LIST */}
        <ul className="flex flex-col gap-3 overflow-hidden py-4">
          {tasks?.map((task, idx) => (
            <SelectorList
              key={task?.id}
              id={task?.id}
              active={taskIndex === idx}
              onClick={(e) => toggleTasks(e)}
            >
              <div className="flex">
                <div>
                  <p className=" mt-1 flex text-xs leading-5 text-neutral-500">
                    <span className="inset-x-0 -top-px bottom-0" />
                    ID LG-{task?.id}
                  </p>
                  <p className="text-base leading-6">{task?.name}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                {/* index 6 should be 3 */}
                <FlatBadge priority={tasks[taskIndex]?.priority} />
                {/* <AvatarGroup /> */}
                <p className="text-xs text-neutral-500">
                  {formattedDates[idx]?.startDate} -{" "}
                  {formattedDates[idx]?.targetDate}
                </p>
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </SelectorList>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TaskList;
