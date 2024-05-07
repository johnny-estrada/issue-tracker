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
      <div className="grid grid-flow-col lg:flex lg:h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col h-screen lg:h-full w-full overflow-auto">
          <Header>
            {headerTop}
            {headerMiddle}
            {headerBottom}
          </Header>
          <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-white pb-18 lg:pb-0">
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
