import HeaderTitle from "../../components/ui/header/HeaderTitle";
import EditTaskForm from "./components/EditTaskForm";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

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
