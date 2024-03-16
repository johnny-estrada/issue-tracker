import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const TwoColumns = ({ children }) => {
  const [
    headerTop,
    headerMiddle,
    headerBottom,
    mainLeft,
    mainRightTop,
    mainRightBottom,
  ] = children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 overflow-auto lg:flex flex-col lg:ml-[288px] h-screen">
        <Header>
          {headerTop}
          {headerMiddle}
          {headerBottom}
        </Header>
        <main className="lg:flex lg:h-full">
          <div className="lg:flex-1 lg:px-14 lg:pt-10 lg:mb-auto h-auto">
            {mainLeft}
          </div>

          <div className="flex-1 lg:px-14 lg:pt-10 border-l border-gray-200">
            {mainRightTop}
            {mainRightBottom}
          </div>
        </main>
      </div>
    </>
  );
};

export default TwoColumns;
