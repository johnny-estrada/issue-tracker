import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const TwoColumnsWide = ({ children }: Props) => {
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
        <div className="flex flex-col h-full w-full overflow-auto">
          <Header>
            {headerTop}
            {headerMiddle}
            {headerBottom}
          </Header>
          <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-white pb-18 lg:pb-0">
            <div className="lg:w-2/5 px-6 lg:px-14 lg:pt-10 mb-20 lg:mb-0">
              {mainLeft}
            </div>
            <div className="hidden lg:block lg:flex-1 px-6 lg:pr-14 lg:pl-0 lg:pt-10">
              {mainTopRight}
              {mainBottomRight}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TwoColumnsWide;
