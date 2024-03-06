import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  const [headerTop, headerMiddle, headerBottom, main] = children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 overflow-hidden lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          {headerTop}
          {headerMiddle}
          {headerBottom}
        </Header>
        <main className="lg:flex lg:h-screen">
          <div className="lg:flex-1 lg:px-14 lg:pt-10 lg:max-w-4xl">{main}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
