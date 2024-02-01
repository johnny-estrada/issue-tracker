import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../../utils/formatting";

import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import SelectorList from "../../components/ui/SelectorList";
import FlatBadge from "../../components/ui/FlatBadge";
import TwoColumns from "../../layout/TwoColumns";

const Tasks = () => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const { data: projects } = useGetProjectsQuery();
  const { data: tasks } = useGetTaskQuery();

  useEffect(() => {
    const currentTask = tasks?.[taskIndex];

    if (currentTask) {
      const formatted1 = formatDate(currentTask.startDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate1(formatted1);

      const formatted2 = formatDate(currentTask.targetDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate2(formatted2);
    }

    if (tasks) {
      const formattedDatesArray = tasks.map((task) => {
        const startDate = formatDate(task.startDate, {
          month: "short",
          day: "numeric",
        });

        const targetDate = formatDate(task.targetDate, {
          month: "short",
          day: "numeric",
        });

        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [taskIndex, tasks]);

  function toggleTasks(e) {
    const taskId = Number(e.currentTarget.id);
    const taskIndex = tasks?.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setTaskIndex(taskIndex);
    }
  }

  const title = "All tasks";

  return (
    <>
      <TwoColumns>
        <HeaderTitle title={title} />
        <div className="flex justify-between">
          <ButtonGroup titles={["list", "board"]} />
          <FilterButton />
        </div>
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

        {/* TASKS DETAILS SECTION */}
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
      </TwoColumns>
    </>
  );
};

export default Tasks;
