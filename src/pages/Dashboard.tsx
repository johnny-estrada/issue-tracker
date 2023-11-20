import { useState } from "react";
import Header from "../layout/Header";
import DataDisplay from "../components/ui/DataDisplay";
import SplitScreen from "../layout/SplitScreen";
import Main from "../layout/Main";
import HeaderTitle from "../components/ui/HeaderTitle";
import TwoColumnsFull from "../layout/TwoColumnsFull";
import ShowHideList from "../components/ui/ShowHideList";
import LineChart from "../components/ui/charts/LineChart";
import BarCharts from "../components/ui/charts/BarCharts";
import SelectorList from "../components/ui/SelectorList";
import AvatarGroup from "../components/ui/AvatarGroup";

interface Props {
  projectData: object[];
  lineChartData: object[];
  barChartData: object[];
}

const Dashboard = ({ projectData, lineChartData, barChartData }: Props) => {
  const [projects, setProjects] = useState(projectData);
  const [projectIndex, setProjectIndex] = useState(0);

  const [lineChart, setLineChart] = useState(lineChartData);
  const [barChart, setBarChart] = useState(barChartData);

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);
    setProjectIndex(i);
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
            {project.tasksList.length} tasks &#x2022; {project.overdue} overdue
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

  const title = "Dashboard";

  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title={title} />
          <DataDisplay projects={projects} />
        </Header>
        <Main>
          <TwoColumnsFull>
            <ShowHideList projectIndex={projectIndex} projectData={projects} />
            <>
              <LineChart width={430} height={450} data={lineChart} />
              <BarCharts width={430} height={450} data={barChart} />
            </>

            <ul className="flex flex-col gap-3 overflow-hidden rounded-lg px-1 py-4">
              {projectList}
            </ul>
          </TwoColumnsFull>
        </Main>
      </SplitScreen>
    </>
  );
};

export default Dashboard;
