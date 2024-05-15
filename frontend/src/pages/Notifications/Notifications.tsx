import { SyntheticEvent, useState } from "react";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import Column from "../../layout/Column";
import NotificationsList from "./components/NotificationsList";
import SearchBar from "../../components/ui/header/SearchBar";
import MailboxIcon from "./components/MailboxIcon";

const Notifications = () => {
  const { data: projects } = useGetProjectsQuery("");

  const [projectIndex, setProjectIndex] = useState(-1);
  // const buttonNames = ["all", "unread", "read"];

  function toggleProjects(e: SyntheticEvent) {
    const i = Number(e.currentTarget.id);

    setProjectIndex(i);
  }

  return (
    <div>
      {!projects ? (
        <Column>
          <HeaderTitle title="Notifications" />
          <SearchBar />
          <div className="h-5"></div>
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
          <SearchBar />
          <div></div>
          <div className="flex justify-center m-auto items-center h-screen -mt-36">
            <div>
              <MailboxIcon />

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
