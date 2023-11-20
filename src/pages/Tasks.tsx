import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SplitScreen from "../layout/SplitScreen";
import Header from "../layout/Header";
import TwoColumns from "../layout/TwoColumns";
import Main from "../layout/Main";
import HeaderTitle from "../components/ui/HeaderTitle";
import ButtonGroup from "../components/ui/ButtonGroup";
import AvatarGroup from "../components/ui/AvatarGroup";
import FilterButton from "../components/ui/FilterButton";
import SelectorList from "../components/ui/SelectorList";
import ListMenu from "../components/ui/ListMenu";
import FlatBadge from "../components/ui/FlatBadge";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

interface Props {
  projectData: object[];
}

const Tasks = ({ projectData }: Props) => {
  const [projects, setProjects] = useState(projectData);
  const [projectIndex, setProjectIndex] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);

  function toggleTasks(e) {
    const taskId = Number(e.currentTarget.id);

    const foundTask = projects.reduce((accumulator, project) => {
      const taskIndex = project.tasksList.findIndex(
        (task) => task.id === taskId,
      );
      if (taskIndex !== -1) {
        return { project, taskIndex };
      }
      return accumulator;
    }, -1);

    if (foundTask) {
      const { project, taskIndex } = foundTask;
      const projectIndex = projects.indexOf(project);

      setProjectIndex(projectIndex);
      setTaskIndex(taskIndex);
    }
  }

  const title = "Tasks";

  return (
    <SplitScreen>
      <Header>
        <HeaderTitle title={title} />
        <div className="flex justify-between">
          <ButtonGroup />
          <FilterButton />
        </div>
      </Header>

      <Main>
        <TwoColumns>
          <section aria-labelledby="projects">
            <h2 className="sr-only" id="projects">
              All Projects
            </h2>
            <div className="flex justify-between">
              <h2 className="text-xl pb-4">{title}</h2>
              <div className="flex gap-5 items-center">
                <a href="#" className="hover:bg-gray-100 rounded-full p-3">
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="#" className="hover:bg-gray-100 rounded-full p-3">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
            <ul className="flex flex-col gap-3 overflow-hidden py-4">
              {projects.map((project, i) => (
                <React.Fragment key={project.id}>
                  {project.tasksList.map((task, idx) => (
                    <SelectorList
                      key={task.id}
                      id={task.id}
                      active={projectIndex === i && taskIndex === idx}
                      onClick={(e) => toggleTasks(e)}
                    >
                      <div className="flex">
                        <div>
                          <p className=" mt-1 flex text-xs leading-5 text-gray-400">
                            <span className="inset-x-0 -top-px bottom-0" />
                            ID PL-{task.id}
                          </p>
                          <p className="text-sm font-semibold leading-6">
                            {task.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <FlatBadge priority={task.priority} />
                        <AvatarGroup />
                        <p>Tomorrow</p>
                        <ChevronRightIcon className="w-5 h-5" />
                      </div>
                    </SelectorList>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </section>

          <section aria-labelledby="projects">
            <h2 className="sr-only" id="projects">
              All Projects
            </h2>
            <div className="flex justify-between">
              <h2 className="text-xl pb-4">Task Details</h2>

              <a href="#" className="rounded-full hover:bg-gray-100 w-11 p-2">
                <span className="sr-only">Expand Task Details</span>
                <ArrowRightIcon
                  className="w-4 h-4 mx-auto transform -rotate-45 origin-top"
                  aria-hidden="true"
                />
                <ArrowLeftIcon
                  className="w-4 h-4 mx-auto transform -rotate-45 origin-bottom-left"
                  aria-hidden="true"
                />
              </a>
            </div>
            <ul className="w-2/3">
              {projects.length > 0 &&
              projectIndex < projects.length &&
              projects[projectIndex].tasksList &&
              taskIndex < projects[projectIndex].tasksList.length ? (
                <ul className="w-2/3">
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Name</h4>
                    <p>{projects[projectIndex].tasksList[taskIndex].name}</p>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Status</h4>
                    <p>{projects[projectIndex].tasksList[taskIndex].status}</p>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Priority</h4>
                    <p>
                      <FlatBadge
                        priority={
                          projects[projectIndex].tasksList[taskIndex].priority
                        }
                      />
                      {/* {projects[projectIndex].tasksList[taskIndex].priority} */}
                    </p>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Asignee</h4>
                    <div className="flex gap-3">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p>Fred S</p>
                    </div>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Start date</h4>
                    <p>
                      {projects[projectIndex].tasksList[taskIndex].startDate}
                    </p>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Target date</h4>
                    <p>
                      {projects[projectIndex].tasksList[taskIndex].targetDate}
                    </p>
                  </li>
                  <li className="flex flex-wrap justify-between py-2">
                    <h4>Project</h4>
                    <p>{projects[projectIndex].client}</p>
                  </li>
                </ul>
              ) : (
                <li>No task details available</li>
              )}
            </ul>
          </section>
        </TwoColumns>
      </Main>
    </SplitScreen>
  );
};

export default Tasks;
