import HeaderTitle from "../components/ui/HeaderTitle";
import CreateTaskForm from "../components/form/CreateTaskForm";
import Header from "../layout/Header";
import Main from "../layout/Main";
import SplitScreen from "../layout/SplitScreen";
import TwoColumns from "../layout/TwoColumns";

const CreateTask = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Create task" />
          <></>
        </Header>
        <Main>
          <TwoColumns>
            <CreateTaskForm />
            <></>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
};

export default CreateTask;
