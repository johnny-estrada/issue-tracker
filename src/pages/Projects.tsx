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

interface Props {
  data: object[];
}

function Projects({ data }: Props) {
  const [projects, setProject] = useState(data);
  const [index, setIndex] = useState(0);

  function toggleProjects(e) {
    let index = e.currentTarget.id;
    setIndex(index)
    console.log(index)
  }

  const projectList = projects.map((project, index) => (
    <SelectorList
      index={index}
      client={project.client}
      tasks={project.tasks}
      overdue={project.overdue}
      startDate={project.startDate}
      targetDate={project.targetDate}
      key={project.id}
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
              <Details
                client={projects[index].client}
                startDate={projects[index].startDate}
                targetDate={projects[index].targetDate}
                key={projects[index].id}
              />
            </div>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
}

export default Projects;
