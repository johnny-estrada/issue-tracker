import Header from "../components/header/Header";

import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  const [headerTop, headerBottom, mainLeft, mainRight] = children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 overflow-hidden lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          {headerTop}
          {headerBottom}
        </Header>
        <main className="lg:flex lg:h-screen">
          <div className="lg:flex-1 lg:px-14 lg:pt-10 lg:mb-auto">
            {mainLeft}
          </div>
          <div className="lg:flex-1 lg:px-14 lg:pt-10 border-l border-gray-200 lg:block hidden">
            {mainRight}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
