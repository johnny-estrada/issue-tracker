import HeaderTitle from "../../components/ui/header/HeaderTitle";
import EditingTemplate from "./components/EditingTemplate";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

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
