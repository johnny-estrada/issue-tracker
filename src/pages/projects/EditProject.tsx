import HeaderTitle from "../../components/header/HeaderTitle";
import EditingTemplate from "./EditingTemplate";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const EditProject = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title="Edit project" />
          <></>
        </Header>
        <main>
          <EditingTemplate />
        </main>
      </div>
    </>
  );
};

export default EditProject;
