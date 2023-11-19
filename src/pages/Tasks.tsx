import { Fragment, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SplitScreen from "../layout/SplitScreen";
import Header from "../layout/Header";
import TwoColumns from "../layout/TwoColumns";
import Main from "../layout/Main";
import HeaderTitle from "../components/ui/HeaderTitle";
import ButtonGroup from "../components/ui/ButtonGroup";
import FilterButton from "../components/ui/FilterButton";
import Details from "../components/ui/Details";
import SelectorList from "../components/ui/SelectorList";
import FlatBadge from "../components/ui/FlatBadge";

interface Props {
  projectData: object[];
}

const Tasks = ({ projectData }: Props) => {
  const [projects, setProject] = useState(projectData);
  const [taskIndex, setTaskIndex] = useState(0);

  function toggleTasks(e) {
    const i = Number(e.currentTarget.id);
    setTaskIndex(i);
  }

  // const taskList = projects.map((project) => (
  //   project.tasksList.map((task, idx) => (

  //   <SelectorList key={idx} id={idx}>
  //     <div className="flex min-w-0 gap-x-4">
  //       <div className="min-w-0 flex-auto">
  //         <p className=" mt-1 flex text-xs leading-5 text-gray-400">
  //           <span className="inset-x-0 -top-px bottom-0" />
  //           ID PL-{task.id}
  //         </p>
  //         <p className="text-sm font-semibold leading-6">{task.title}</p>
  //       </div>
  //     </div>
  //     <div className="flex shrink-0 items-center gap-x-4">
  //       <FlatBadge />
  //       <p className="text-gray-400">
  //         <ChevronRightIcon className="h-5 w-5" />
  //       </p>
  //     </div>
  //   </SelectorList>
  // )))

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
            <div className="flex  justify-between">
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
            <ul className="flex flex-col gap-3">
              {projects.map((project) => (
                <Fragment key={project.id}>
                  {project.tasksList.map((task) => (
                    <SelectorList key={task.id}>
                      <div className="flex">
                        <div>
                          <p className=" mt-1 flex text-xs leading-5 text-gray-400">
                            <span className="inset-x-0 -top-px bottom-0" />
                            ID PL-{task.id}
                          </p>
                          <p className="text-sm font-semibold leading-6">
                            {task.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <FlatBadge />
                        <p className="text-gray-400">
                          <ChevronRightIcon className="h-5 w-5" />
                        </p>
                      </div>
                    </SelectorList>
                  ))}
                </Fragment>
              ))}
            </ul>
          </section>

          <div>
            {/* <Details
              id={tasks[taskIndex].id}
              title={tasks[taskIndex].title}
            /> */}
          </div>
        </TwoColumns>
      </Main>
    </SplitScreen>
  );
};

export default Tasks;
