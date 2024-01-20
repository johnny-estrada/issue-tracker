import HeaderTitle from "../components/ui/HeaderTitle";
import CreateProjectForm from "../components/form/CreateProjectForm";
import Header from "../layout/Header";
import Main from "../layout/Main";
import SplitScreen from "../layout/SplitScreen";
import TwoColumns from "../layout/TwoColumns";

const EditProject = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Create project" />
          <></>
        </Header>
        <Main>
          <TwoColumns>
            <CreateProjectForm />
            <></>
          </TwoColumns>
        </Main>
      </SplitScreen>
    </>
  );
};

export default EditProject;
