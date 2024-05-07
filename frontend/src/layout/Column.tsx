import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [headerTop, headerMiddle, headerBottom, main] = children;

  return (
    <>
      <div className=" lg:flex grid grid-flow-col h-screen overflow-hidden">
        <div className="absolute z-20 w-full lg:w-72 bottom-0 row-span-3 lg:h-auto lg:relative">
          <Sidebar />
        </div>
        <div className="flex flex-col h-screen lg:h-full w-full overflow-auto">
          <Header>
            {headerTop}
            {headerMiddle}
            {headerBottom}
          </Header>
          <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-white">
            {main}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
