import HeaderTitle from "../../components/ui/HeaderTitle";
import CreateTaskForm from "../../components/form/CreateTaskForm";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import SplitScreen from "../../layout/SplitScreen";

const CreateTask = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Create task" />
          <></>
        </Header>
        <Main>
          <CreateTaskForm />
        </Main>
      </SplitScreen>
    </>
  );
};

export default CreateTask;
