import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const TwoColumns = ({ children }: Props) => {
  const [
    headerTop,
    headerMiddle,
    headerBottom,
    mainLeft,
    mainTopRight,
    mainBottomRight,
  ] = children;

  return (
    <>
      <div className=" lg:flex grid grid-rows-3 grid-flow-col bg-slate-600 h-screen overflow-hidden">
        <div className="absolute z-20 w-full lg:w-72 bottom-0 bottom- row-span-3 bg-red-800 lg:relative lg:h-auto">
          <Sidebar />
        </div>
        <div className="flex  flex-col h-screen lg:h-full w-full overflow-auto">
          <Header>
            {headerTop}
            {headerMiddle}
            {headerBottom}
          </Header>
          <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-white mb-18 lg:mb-0">
            <div className="lg:flex-1 px-6 lg:px-14 lg:pt-10 border-r border-gray-200">
              {mainLeft}
            </div>
            <div className="lg:flex-1 px-6 lg:px-14 lg:pt-10 border-r border-gray-200">
              {mainTopRight}
              {mainBottomRight}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TwoColumns;
