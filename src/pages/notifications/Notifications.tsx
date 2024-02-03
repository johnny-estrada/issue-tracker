import { useState } from "react";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../../utils/formatting";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import Column from "../../layout/Column";
import NotificationsList from "./components/NotificationsList"



const Notifications = () => {
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery();

  const [projectIndex, setProjectIndex] = useState(-1);
  const [formattedDates, setFormattedDates] = useState([]);
  const buttonNames = ["all", "unread", "read"];

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);

    setProjectIndex(i);
  }

  const title = "Notifications";
  return (
    <>
      <Column>
        <HeaderTitle title={title} />
        <div className="flex justify-between">
          <ButtonGroup titles={buttonNames} />
          <FilterButton />
        </div>

        <NotificationsList projects={projects} projectIndex={projectIndex} toggleProjects={toggleProjects} />
      </Column>
    </>
  );
};

export default Notifications;
