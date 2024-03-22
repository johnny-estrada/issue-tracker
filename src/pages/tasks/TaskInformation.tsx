import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { useGetUsersQuery } from "../../services/state/redux/slices/usersApiSlice";
import { formatDate } from "../../utils/formatting";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FlatBadge from "../../components/ui/FlatBadge";
import TaskMenu from "../../components/ui/TaskMenu";
import TwoColumns from "../../layout/TwoColumns";
import Attachments from "./components/Attachments";
import SortBy from "../../components/header/SortBy";
import SearchBar from "../../components/header/SearchBar";
import Comments from "./components/Comments";
import Subtasks from "./components/Subtasks";
import Information from "./components/Information";
import ActivityLog from "./components/ActivityLog";
import Details from "./components/Details";
import { useSelector } from "react-redux";

const TaskInformation = () => {
  const { data: projects } = useGetProjectsQuery("");
  const { data: tasks, refetch } = useGetTaskQuery("");
  const [taskIndex, setTaskIndex] = useState(0);
  const { id } = useParams();
  const { data: users } = useGetUsersQuery("");

  let b = tasks?.findIndex((task) => task.id == id);
  console.log(b); // 18 i3
  // console.log(id)

  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (tasks) {
      const formatted1 = formatDate(tasks[b].startDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate1(formatted1);

      const formatted2 = formatDate(tasks[b].targetDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate2(formatted2);
    }
  }, [b, tasks]);

  function search(text: string) {
    alert(text);
  }

  const task1 = users?.findIndex((user) => user.id === tasks[taskIndex].userId);

  const created = formatDate(tasks[taskIndex].createdAt, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!users) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  if (!tasks) {
    // Handle the case where tasks is undefined or projectIndex is out of bounds
    return null; // or you can render an error message
  }

  return (
    <div>
      <TwoColumns>
        <HeaderTitle title={tasks[b].name} />
        <SearchBar search={search} />
        <div className="flex justify-between">
          <div className="flex gap-10">
            <SortBy />
            <div>
              priority:{" "}
              <ButtonGroup titles={["high", "medium", "low"]} onFilter={null} />
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-0">
          <Information tasks={tasks} taskIndex={b} />
          <Subtasks />
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
              taskId={id}
              users={users || undefined}
              tasks={tasks}
              taskIndex={b}
              projects={projects}
              formattedDate1={formattedDate1}
              formattedDate2={formattedDate2}
            />
          </section>

          {/* <Attachments
            taskId={Number(id)}
            userId={null}
            taskIndex={b}
            tasks={tasks}
          />
          <ActivityLog created={created} users={users} task1={task1} /> */}
        </div>
      </TwoColumns>
    </div>
  );
};

export default TaskInformation;
