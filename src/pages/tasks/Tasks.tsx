import { useState, useEffect } from "react";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { formatDate } from "../../utils/formatting";
import HeaderTitle from "../../components/header/HeaderTitle";
import ButtonGroup from "../../components/header/ButtonGroup";
import FilterButton from "../../components/header/FilterButton";
import TwoColumns from "../../layout/TwoColumns";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

const Tasks = () => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [formattedDates, setFormattedDates] = useState([]);
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  const { data: projects } = useGetProjectsQuery();
  const { data: tasks } = useGetTaskQuery();

  const buttonName = ["list", "board"];

  useEffect(() => {
    const currentTask = tasks?.[taskIndex];

    if (currentTask) {
      const formatted1 = formatDate(currentTask.startDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate1(formatted1);

      const formatted2 = formatDate(currentTask.targetDate, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setFormattedDate2(formatted2);
    }

    if (tasks) {
      const formattedDatesArray = tasks.map((task) => {
        const startDate = formatDate(task.startDate, {
          month: "short",
          day: "numeric",
        });

        const targetDate = formatDate(task.targetDate, {
          month: "short",
          day: "numeric",
        });

        return { startDate, targetDate };
      });

      setFormattedDates(formattedDatesArray);
    }
  }, [taskIndex, tasks]);

  function toggleTasks(e) {
    const taskId = Number(e.currentTarget.id);
    const taskIndex = tasks?.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setTaskIndex(taskIndex);
    }
  }

  const title = "All tasks";

  return (
    <>
      <TwoColumns>
        <HeaderTitle title={title} />
        <div className="flex justify-between">
          <ButtonGroup titles={buttonName} />
          <FilterButton />
        </div>
        <TaskList
          tasks={tasks}
          taskIndex={taskIndex}
          toggleTasks={toggleTasks}
          formattedDates={formattedDates}
        />

        <TaskDetails
          tasks={tasks}
          taskIndex={taskIndex}
          projects={projects}
          formattedDate1={formattedDate1}
          formattedDate2={formattedDate2}
        />
      </TwoColumns>
    </>
  );
};

export default Tasks;
