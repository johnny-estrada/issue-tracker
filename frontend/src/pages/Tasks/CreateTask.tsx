import HeaderTitle from "../../components/ui/header/HeaderTitle";
import CreateTaskForm from "./components/CreateTaskForm";
import Column from "../../layout/Column";

const CreateTask = () => {
  return (
    <>
      <Column>
        <HeaderTitle title="Create task" />
        <></>

        <CreateTaskForm />
      </Column>
    </>
  );
};

export default CreateTask;
