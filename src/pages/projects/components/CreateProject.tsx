import HeaderTitle from "../../../components/header/HeaderTitle";
import CreateProjectForm from "./CreateProjectForm";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

const EditProject = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title="Create project" />
          <></>
        </Header>

        <CreateProjectForm />
      </div>
    </>
  );
};

export default EditProject;
