import HeaderTitle from "../../../components/header/HeaderTitle";
import CreateTaskForm from "./CreateTaskForm";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

const CreateTask = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title="Create task" />
          <></>
        </Header>
        <main>
          <CreateTaskForm />
        </main>
      </div>
    </>
  );
};

export default CreateTask;
