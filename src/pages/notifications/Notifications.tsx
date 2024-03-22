import { useState } from "react";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../../utils/formatting";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import Column from "../../layout/Column";
import NotificationsList from "./components/NotificationsList";
import SearchBar from "../../components/header/SearchBar";
import notificationsIcon from "../../assets/images/notifications.svg";

const Notifications = () => {
  const { data: projects, refetch, isLoading, error } = useGetProjectsQuery("");

  const [projectIndex, setProjectIndex] = useState(-1);
  const [formattedDates, setFormattedDates] = useState([]);
  const buttonNames = ["all", "unread", "read"];

  function toggleProjects(e) {
    const i = Number(e.currentTarget.id);

    setProjectIndex(i);
  }

  function search(text) {
    alert(text);
  }

  return (
    <div>
      {!projects ? (
        <Column>
          <HeaderTitle title="Notifications" />
          <SearchBar search={search} />
          <ButtonGroup titles={buttonNames} />
          <div className="lg:flex-1 lg:px-14 lg:pt-10 lg:max-w-4xl">
            <NotificationsList
              projects={projects}
              projectIndex={projectIndex}
              toggleProjects={toggleProjects}
            />
          </div>
        </Column>
      ) : (
        <Column>
          <HeaderTitle title="Notifications" />
          <SearchBar search={search} />
          <ButtonGroup titles={buttonNames} />
          <div className="flex justify-center m-auto items-center h-screen -mt-36">
            <div>
              <img src={notificationsIcon} alt="" className="w-28 lg:w-52" />
              <p className="text-gray-500 text-sm lg:text-base mt-1 lg:mt-2">
                No notifications yet
              </p>
            </div>
          </div>
        </Column>
      )}
    </div>
  );
};

export default Notifications;
