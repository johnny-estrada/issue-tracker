import HeaderTitle from "../../components/ui/HeaderTitle";
import EditingTemplate from "../../components/form/EditingTemplate";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import SplitScreen from "../../layout/SplitScreen";

const EditProject = () => {
  return (
    <>
      <SplitScreen>
        <Header>
          <HeaderTitle title="Edit project" />
          <></>
        </Header>
        <Main>
          <EditingTemplate />
        </Main>
      </SplitScreen>
    </>
  );
};

export default EditProject;
