import HeaderTitle from "../../../components/header/HeaderTitle";
import EditTaskForm from "./EditTaskForm";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

const EditTask = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title="Edit task" />
          <></>
        </Header>
        <main>
          <EditTaskForm />
        </main>
      </div>
    </>
  );
};

export default EditTask;
