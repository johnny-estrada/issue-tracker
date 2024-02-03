import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../../utils/formatting";
import Header from "../../components/header/Header";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import FlatBadge from "../../components/ui/FlatBadge";
import TaskMenu from "../../components/ui/TaskMenu";
import Sidebar from "../../components/sidebar/Sidebar";

const TaskInformation = () => {
  const { id } = useParams();
  const [taskIndex, setTaskIndex] = useState(parseInt(id, 10));
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const { data: projects } = useGetProjectsQuery();
  const { data: tasks } = useGetTaskQuery();

  useEffect(() => {
    if (tasks) {
      const formatted1 = formatDate(
        tasks[tasks.findIndex((task) => task.id === taskIndex)].startDate,
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      );
      setFormattedDate1(formatted1);

      const formatted2 = formatDate(
        tasks[tasks.findIndex((task) => task.id === taskIndex)].targetDate,
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      );
      setFormattedDate2(formatted2);
    }
  }, [taskIndex, tasks]);

  const title = "Tasks";

  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title={title} />
          <div className="flex justify-between">
            <ButtonGroup titles={["list", "board"]} />
            <FilterButton />
          </div>
        </Header>

        <main className="flex h-screen">
          <div className="flex-1 p-10 mb-auto">
            <section aria-labelledby="projects">
              <header className="flex justify-between">
                <h2 className="sr-only" id="projects">
                  Task Information
                </h2>

                <h2 className="text-xl pb-4">Task information</h2>
              </header>

              {/* TASKS LIST */}
              <ul className="flex flex-col gap-3 overflow-hidden py-4 text-slate-500 text-sm">
                <li>
                  {
                    tasks?.[tasks.findIndex((task) => task.id === taskIndex)]
                      ?.details
                  }
                </li>
              </ul>
            </section>
          </div>

          <div className="flex-1 p-10 border-l border-gray-200">
            {/* TASKS DETAILS SECTION */}
            <section aria-labelledby="tasks">
              <header className="flex justify-between">
                <h2 className="sr-only" id="tasks">
                  Task Details
                </h2>

                <div className="flex gap-5">
                  <h2 className="text-xl pb-4">Task Details</h2>
                  <FlatBadge priority={`ID LG-${id}`} />
                </div>

                <TaskMenu id={id} tasks={tasks} />
              </header>

              {tasks ? (
                <ul className="w-64">
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Name</h4>
                    <p className="text-sm">
                      {
                        tasks[tasks.findIndex((task) => task.id === taskIndex)]
                          ?.name
                      }
                    </p>
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Status</h4>
                    <p className="text-sm">
                      {
                        tasks[tasks.findIndex((task) => task.id === taskIndex)]
                          ?.status
                      }
                    </p>
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Priority</h4>

                    <FlatBadge
                      priority={
                        tasks[tasks.findIndex((task) => task.id === taskIndex)]
                          ?.priority
                      }
                    />
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Assignee</h4>
                    <div className="flex gap-3">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-sm">Fred S</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Start date</h4>
                    <p className="text-sm">{formattedDate1}</p>
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Target date</h4>
                    <p className="text-sm">{formattedDate2}</p>
                  </li>
                  <li className="grid grid-cols-2 py-2">
                    <h4 className="text-neutral-500 text-sm">Project</h4>
                    <p className="text-sm">
                      {
                        projects?.find(
                          (project) =>
                            tasks[
                              tasks.findIndex((task) => task.id === taskIndex)
                            ].projectId === project.id,
                        )?.client
                      }
                    </p>
                  </li>
                </ul>
              ) : (
                <li>No task details available</li>
              )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default TaskInformation;
