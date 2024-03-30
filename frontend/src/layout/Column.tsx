import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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
        <main className="lg:flex lg:h-screen">{main}</main>
      </div>
    </>
  );
};

export default Layout;
