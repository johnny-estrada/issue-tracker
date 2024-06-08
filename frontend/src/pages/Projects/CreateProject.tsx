import HeaderTitle from "../../components/ui/header/HeaderTitle";
import CreateProjectForm from "./components/CreateProjectForm";
import Column from "../../layout/Column";

const EditProject = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-gray-200">
        <Column>
          <HeaderTitle title="Create project" active={true} />
          <></>
          <></>
          <CreateProjectForm />
        </Column>
      </main>
    </>
  );
};

export default EditProject;
