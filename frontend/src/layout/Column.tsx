import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [headerTop, headerMiddle, headerBottom, main] = children;

  return (
    <>
      <div className=" lg:flex grid grid-flow-col lg:h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col h-full w-full overflow-auto">
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
