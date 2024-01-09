import HeaderTitle from "../../components/ui/HeaderTitle";
import CreateProjectForm from "../../components/form/CreateProjectForm";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import SplitScreen from "../../layout/SplitScreen";

const EditProject = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Create project" />
          <></>
        </Header>
        <Main>
          <CreateProjectForm />
        </Main>
      </SplitScreen>
    </>
  );
};

export default EditProject;
