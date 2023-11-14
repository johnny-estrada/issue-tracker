import { useState } from "react";
import SplitScreen from "../layout/SplitScreen";
import Header from "../layout/_Header";
import HeaderTitle from "../components/ui/HeaderTitle";
import ButtonGroup from "../components/ui/ButtonGroup";
import Main from "../layout/_Main";
import TwoColumns from "../layout/TwoColumns";
import FilterButton from "../components/ui/FilterButton";
import Details from "../components/ui/Details";
import SelectorList from "../components/ui/SelectorList";
import ListMenu from "../components/ui/ListMenu";
import { ListIcon } from "lucide-react";

interface Props {
  projects: object[];
  tasks: object[];
}

function Projects({ projects, tasks }: Props) {
  const [projects1, setProject] = useState(projects);
  const [tasks1, setTasks] = useState(tasks);
  const [index, setIndex] = useState(0);

  function toggleProjects(e) {
    const i = e.currentTarget.id;
    setIndex(i);
  }

  const projectList = projects.map((project, idx) => (
    <SelectorList
      key={idx}
      index={idx}
      id={idx}
      client={project.client}
      tasks={project.tasks}
      overdue={project.overdue}
      startDate={project.startDate}
      targetDate={project.targetDate}
      active={Number(index) === idx}
      onClick={toggleProjects}
    />
  ));

  const taskList = tasks.map((task, idx) => (
    <SelectorList
      key={idx}
      index={idx}
      id={idx}
      client={task.client}
      tasks={task.tasks}
      overdue={task.overdue}
      startDate={task.startDate}
      targetDate={task.targetDate}
      active={Number(index) === idx}
      onClick={toggleProjects}
    />
  ));

  const title = "Projects";

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
                <ListMenu />
              </div>
              {projectList}
            </section>

            <div>
              {/* right-col Output */}
              <section aria-labelledby="projects">
                <Details
                  client={projects[index].client}
                  title={projects[index].title}
                  description={projects[index].description}
                  startDate={projects[index].startDate}
                  targetDate={projects[index].targetDate}
                />
              </section>
              <section aria-labelledby="projects">
                <h2 className="sr-only" id="projects">
                  Tasks
                </h2>
                <div className="flex  justify-between">
                  <h2 className="text-xl pb-4">Tasks</h2>
                  <ListMenu />
                </div>
                <SelectorList />
              </section>
            </div>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
}

export default Projects;
