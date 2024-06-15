import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "../../state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../state/redux/slices/usersApiSlice";
import HeaderTitle from "../../components/ui/header/HeaderTitle";
import ButtonGroup from "./components/ButtonGroup";
import TwoColumns from "../../layout/TwoColumns";
import LabeledSelect from "../../components/form/LabeledSelect";
import SearchBar from "../../components/ui/header/SearchBar";
import Subtasks from "./components/Subtasks";
// import Comments from "./components/comments";
import Information from "./components/Information";
import Details from "./components/Details";
import Loader from "../../components/ui/Loader";
import { useAppSelector } from "../../hooks/hooks";

interface Task {
  id: string;
  priority: string;
}

const TaskInformation = () => {
  const { id } = useParams();
  const { data: projects, isLoading } = useGetProjectsQuery("");
  const { data: tasks, isLoading: isLoadingTasks } = useGetTaskQuery("");
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery("");
  const { userInfo } = useAppSelector((state) => state.auth);

  if (isLoading || isLoadingTasks || isLoadingUsers) {
    return <Loader />;
  }

  const taskIndex = tasks?.findIndex((task: Task) => task.id == id);
  const task = tasks[taskIndex];

  if (!task || !users) {
    return null;
  }

  const handlePriorityChange = (priority: string) => {
    // Update task priority logic here
    // For example, you can make an API call to update the task priority in your backend
    console.log("Priority changed to:", priority);
  };

  return (
    <>
      <div>
        <TwoColumns>
          <HeaderTitle title={task.name} active={true} />
          <SearchBar />

          <div className="flex gap-4 lg:gap-10">
            <LabeledSelect
              label="Status:"
              options={["backlog", "to do", "in progress", "done"]}
              active={task.status}
            />
            <div>
              <span className="text-gray-600 text-sm lg:text-sm mr-1 lg:mr-2">
                Priority:
              </span>
              <ButtonGroup
                titles={["high", "medium", "low"]}
                initialActive={task.priority}
                onClick={handlePriorityChange}
              />
            </div>
          </div>

          <div className="flex-1 py-4 lg:py-0">
            <Information tasks={tasks} taskIndex={taskIndex} />
            <Subtasks />
            {/* <Comments b={taskIndex} tasks={tasks} /> */}
          </div>

          <div className="flex-1 mb-20 p-4 lg:p-0">
            <section aria-labelledby="tasks" className="hidden lg:block">
              <Details
                userId={userInfo.id}
                taskId={id || ""}
                users={users || undefined}
                tasks={tasks}
                taskIndex={taskIndex}
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
