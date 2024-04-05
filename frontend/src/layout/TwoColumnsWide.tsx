import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const TwoColumnsWide = ({ children }: Props) => {
  const [
    headerTop,
    headerMiddle,
    headerBottom,
    mainRight,
    mainLeftTop,
    mainLeftBottom,
  ] = children;

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          {headerTop}
          {headerMiddle}
          {headerBottom}
        </Header>
        <main className="lg:flex lg:h-screen gap-10 lg:px-14 lg:pt-10">
          <div className="lg:w-2/5 mb-20">{mainRight}</div>
          <div className="flex-1 mb-auto lg:block hidden">
            {mainLeftTop}
            {mainLeftBottom}
          </div>
        </main>
      </div>
    </>
  );
};

export default TwoColumnsWide;
