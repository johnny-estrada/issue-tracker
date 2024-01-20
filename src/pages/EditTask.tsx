import HeaderTitle from "../components/ui/HeaderTitle";
import EditTaskForm from "../components/form/EditTaskForm";
import Header from "../layout/Header";
import Main from "../layout/Main";
import SplitScreen from "../layout/SplitScreen";
import TwoColumns from "../layout/TwoColumns";

const EditTask = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Edit task" />
          <></>
        </Header>
        <Main>
          <TwoColumns>
            <EditTaskForm />
            <></>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
};

export default EditTask;
