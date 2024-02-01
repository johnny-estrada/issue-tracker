import Header from "../components/header/Header";

import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  const [headerTop, headerBottom, mainLeft, mainRight] = children;

  const title = "Notifications";
  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          {headerTop}
          {headerBottom}
        </Header>
        <main className="lg:flex lg:h-screen hidden">
          <div className="flex-1 px-14 pt-10 mb-auto">{mainLeft}</div>
          <div className="flex-1 px-14 pt-10 border-l border-gray-200">
            {mainRight}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
