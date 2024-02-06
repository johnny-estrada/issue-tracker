import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const TwoColumnsWide = ({ children }) => {
  const [headerTop, headerBottom, mainRight, mainLeftTop, mainLeftBottom] =
    children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          {headerTop}
          {headerBottom}
        </Header>
        {/* <Tabs data={lineChart} projectData={projects} /> */}
        <main className="lg:flex lg:h-screen gap-10 lg:px-14 lg:pt-10 hidden">
          <div className="w-1/3 mb-auto">{mainRight}</div>
          <div className="flex-1 mb-auto">
            {mainLeftTop}
            {mainLeftBottom}
          </div>
        </main>
      </div>
    </>
  );
};

export default TwoColumnsWide;
