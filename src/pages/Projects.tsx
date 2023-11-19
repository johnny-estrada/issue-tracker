import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import SplitScreen from "../layout/SplitScreen";
import Header from "../layout/Header";
import HeaderTitle from "../components/ui/HeaderTitle";
import ButtonGroup from "../components/ui/ButtonGroup";
import Main from "../layout/Main";
import TwoColumns from "../layout/TwoColumns";
import FilterButton from "../components/ui/FilterButton";
import Details from "../components/ui/Details";
import SelectorList from "../components/ui/SelectorList";
import AvatarGroup from "../components/ui/AvatarGroup";
import FlatBadge from "../components/ui/FlatBadge";

interface Props {
  projectData: object[];
  taskData: object[];
}

function Projects({ projectData, taskData }: Props) {
  const [projects, setProject] = useState(projectData);
  // const [tasks, setTasks] = useState(taskData);
  const [projectIndex, setProjectIndex] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);

  const title = "Projects";

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
  }

  function toggleTasks(e) {
    const i = Number(e.currentTarget.id);
    setTaskIndex(i);
  }

  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={idx}
      id={idx}
      active={projectIndex === idx}
      onClick={toggleProjects}
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="flex h-12 w-12 justify-center items-center rounded-full bg-white text-black">
          <p>BK</p>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6">{project.client}</p>
          <p className=" mt-1 flex text-xs leading-5 text-gray-400">
            <span className="inset-x-0 -top-px bottom-0" />
            {/* {tasks.length} tasks &#x2022; {project.overdue} overdue */}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-4">
        <AvatarGroup />
        <p className="text-gray-400">
          {project.startDate} - {project.targetDate}
        </p>
      </div>
    </SelectorList>
  ));

  // const taskList = projects.map((project, idx) => (
  //   <SelectorList
  //     key={idx}
  //     id={idx}
  //     active={taskIndex === idx}
  //     onClick={toggleTasks}
  //   >
  //     <></>
  //     <div>
  //     <div className="flex min-w-0 gap-x-4">
  //       <div className="min-w-0 flex-auto">
  //         <p className=" mt-1 flex text-xs leading-5 text-gray-400">
  //           <span className="inset-x-0 -top-px bottom-0" />

  //           ID PL-{projects[projectIndex].tasksList[taskIndex].id}
  //         </p>
  //         <p className="text-sm font-semibold leading-6">
  //           {projects[projectIndex].tasksList[taskIndex].title}
  //         </p>
  //       </div>
  //     </div>
  //     <div className="flex shrink-0 items-center gap-x-4">
  //       <FlatBadge />
  //       <p className="text-gray-400">
  //         <ChevronRightIcon className="h-5 w-5" />
  //       </p>
  //     </div>
  //     </div>

  //   </SelectorList>
  // ));

  return (
    <>
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
            {/* left-col Input */}
            <section aria-labelledby="projects">
              <h2 className="sr-only" id="projects">
                All Projects
              </h2>
              <div className="flex  justify-between">
                <h2 className="text-xl pb-4">{title}</h2>
                <div className="flex gap-5 items-center">
                  <a href="#" className="hover:bg-gray-100 rounded-full p-3">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a href="#" className="hover:bg-gray-100 rounded-full p-3">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon
                      className="w-5 h-5 hover:bg-gray-100 rounded-full"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
              <ul className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
                {projectList}
              </ul>
            </section>

            <div>
              {/* right-col Output */}
              <section aria-labelledby="projects">
                <Details
                  client={projects[projectIndex].client}
                  title={projects[projectIndex].title}
                  description={projects[projectIndex].description}
                  startDate={projects[projectIndex].startDate}
                  targetDate={projects[projectIndex].targetDate}
                />
              </section>
              <section aria-labelledby="projects">
                <h2 className="sr-only" id="projects">
                  Tasks
                </h2>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-xl pb-4">Tasks</h2>
                  <Link
                    to="/tasks"
                    className="underline text-sm text-orange-400 hover:text-orange-500"
                    href="#"
                  >
                    view all
                  </Link>
                </div>
                {/* {taskList} */}

                {projects[projectIndex].tasksList.map((item, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer justify-between gap-x-6 px-4 py-4 hover:bg-white sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className=" mt-1 flex text-xs leading-5 text-gray-400">
                          <span className="inset-x-0 -top-px bottom-0" />
                          ID PL-
                          {item.id}
                        </p>
                        <p className="text-sm font-semibold leading-6">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4">
                      <FlatBadge />
                      <p className="text-gray-400">
                        <ChevronRightIcon className="h-5 w-5" />
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
}

export default Projects;
