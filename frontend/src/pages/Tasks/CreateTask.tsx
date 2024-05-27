import HeaderTitle from "../../components/ui/header/HeaderTitle";
import CreateTaskForm from "./components/CreateTaskForm";
import Column from "../../layout/Column";

const CreateTask = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-gray-200">
        <Column>
          <HeaderTitle title="Create task" />
          <></>
          <></>
          <CreateTaskForm />
        </Column>
      </main>
    </>
  );
};

export default CreateTask;
