import HeaderTitle from "../../components/ui/header/HeaderTitle";
import EditTaskForm from "./components/EditTaskForm";
import Column from "../../layout/Column";

const EditTask = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-gray-200">
        <Column>
          <HeaderTitle title="Edit task" />
          <></>
          <></>
          <EditTaskForm />
        </Column>
      </main>
    </>
  );
};

export default EditTask;
