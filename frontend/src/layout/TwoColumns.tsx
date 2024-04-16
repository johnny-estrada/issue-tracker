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
    mainRightTop,
    mainRightBottom,
  ] = children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 overflow-auto lg:ml-[288px] h-full lg:h-screen">
        <Header>
          {headerTop}
          {headerMiddle}
          {headerBottom}
        </Header>
        <main className="lg:flex h-full">
          <div className="lg:flex-1 px-6 lg:px-14 lg:pt-10 border-r border-gray-200">
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
