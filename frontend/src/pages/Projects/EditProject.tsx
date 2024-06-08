import HeaderTitle from "../../components/ui/header/HeaderTitle";
import EditingTemplate from "./components/EditingTemplate";
import Column from "../../layout/Column";

const EditProject = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row flex-1 row-span-2 col-span-2 bg-gray-200">
        <Column>
          <HeaderTitle title="Edit project" active={true} />
          <></>
          <></>
          <EditingTemplate />
        </Column>
      </main>
    </>
  );
};

export default EditProject;
