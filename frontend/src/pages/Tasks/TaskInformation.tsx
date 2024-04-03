import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";
import HeaderTitle from "../../components/header/HeaderTitle";
// import ButtonGroup from "../../components/header/ButtonGroup";
import TwoColumns from "../../layout/TwoColumns";
// import SortBy from "../../components/header/SortBy";
import SearchBar from "../../components/header/SearchBar";
// import Subtasks from "./components/Subtasks";
import Information from "./components/Information";
import Details from "./components/Details";
import Loader from "../../components/ui/Loader";
import { useAppSelector } from "../../hooks/hooks";

interface Task {
  id: string;
}

const TaskInformation = () => {
  const { id } = useParams();

  const { data: projects, isLoading } = useGetProjectsQuery("");
  const { data: tasks, isLoading: isLoadingTasks } = useGetTaskQuery("");
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery("");
  const { userInfo } = useAppSelector((state) => state.auth);

  const b = tasks?.findIndex((task: Task) => task.id == id);

  if (!users) {
    return null;
  }

  if (!tasks) {
    return null;
  }

  return (
    <>
      {isLoading && <Loader />}
      {isLoadingTasks && <Loader />}
      {isLoadingUsers && <Loader />}

      <div>
        <TwoColumns>
          <HeaderTitle title={tasks[b].name} />
          <SearchBar />
          <div className="flex justify-between">
            <div className="flex gap-10">
              {/* <SortBy />
              <div>
                priority:{" "}
                <ButtonGroup
                  titles={["high", "medium", "low"]}
                  onFilter={() => {}}
                />
              </div> */}
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-0">
            <Information tasks={tasks} taskIndex={b} />
            {/* <Subtasks /> */}
            {/* <Comments b={b} tasks={tasks} /> */}
          </div>

          <div className="flex-1 mb-20 p-4 lg:p-0">
            <section aria-labelledby="tasks">
              {/* <header className="flex justify-between">
              <h2 className="sr-only" id="tasks">
                Task Details
              </h2>

              <div className="flex gap-5">
                <h2 className="text-xl lg:text-2xl pb-4">Task Details</h2>
                <FlatBadge priority={`ID LG-${id}`} />
              </div>

              <TaskMenu id={id} tasks={tasks} refetch={refetch} />
            </header> */}

              <Details
                userId={userInfo.id}
                taskId={id || ""}
                users={users || undefined}
                tasks={tasks}
                taskIndex={b}
                projects={projects}
              />
            </section>
          </div>
        </TwoColumns>
      </div>
    </>
  );
};

export default TaskInformation;
