import { useState, useEffect } from "react";
import {
  ClockIcon,
  FolderIcon,
  ClipboardDocumentCheckIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

interface Project {
  id: string; // Assuming each project has an ID
  hours: number;
}

interface Task {
  userId: string;
  projectId: string;
  status: string;
  targetDate: string;
}

interface IDataDisplay {
  projects: Project[];
  projectIndex: number;
  tasks: Task[];
  userInfo: { id: string };
}

export default function DataDisplay({ projects, projectIndex, tasks, userInfo }: IDataDisplay) {
  const [projectHours, setProjectHours] = useState<number>(0);
  const [projectComplete, setProjectComplete] = useState(0);
  const [taskDue, setTaskDue] = useState<Task[]>([]);
  const [taskComplete, setTaskComplete] = useState<Task[]>([]);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [myTask, setMyTask] = useState<Task[]>([]);

  useEffect(() => {
    const project = projects[projectIndex];

    const userTasks = tasks.filter(
      (task) => task.userId === userInfo.id && task.projectId === project.id
    ) || [];

    const completedTasks = userTasks.filter((task) => task.status === "done");
    const incompleteTasks = userTasks.filter((task) => task.status !== "done");
    const getHours = project.hours;

    const today = new Date();
    const dueTasks = userTasks.filter(
      (task) => new Date(task.targetDate) >= today
    );

    setMyTask(userTasks);
    setProjectHours(getHours);
    setTaskComplete(completedTasks);
    setTaskList(incompleteTasks);
    setTaskDue(dueTasks);

    if (userTasks.length > 0) {
      setProjectComplete(Math.ceil((completedTasks.length / userTasks.length) * 100));
    }
  }, [tasks, userInfo.id, projects, projectIndex]);

  const stats = [
    { name: "Hours this week", stat: projectHours, icon: ClockIcon },
    {
      name: "Project completed",
      stat: projectComplete || 0,
      icon: FolderIcon,
      isPercentage: true,
    },
    {
      name: "Tasks due",
      stat: Math.ceil((taskDue.length / taskList.length) * 100) || 0,
      icon: ClipboardDocumentCheckIcon,
      isPercentage: true,
    },
    {
      name: "Assigned to me",
      stat: myTask.length || 0,
      icon: ListBulletIcon,
      isTask: true,
    },
  ];

  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-2.5 lg:gap-10 lg:px-0 group tracking-wide">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="overflow-hidden rounded-lg bg-white px-2 py-2 lg:px-4 lg:py-4 shadow sm:p-6 max-w-96x"
        >
          <dt className="truncate text-sm lg:text-lg text-gray-900 mb-4 lg:mb-2">
            {stat.name}
          </dt>
          <div className="flex justify-between">
            <dd className="mt-1 text-base lg:text-3xl tracking-tight text-gray-900">
              {stat.stat}
              {stat.name === "Hours this week" && (
                <span className="text-sm lg:text-xl tracking-wide">
                  {stat.stat === 1 ? " hr" : " hrs"}
                </span>
              )}
              {stat.isPercentage && (
                <span className="text-sm lg:text-xl"> %</span>
              )}
              {stat.isTask && (
                <span className="text-sm lg:text-xl tracking-wide"> tasks</span>
              )}
            </dd>
            <stat.icon className="w-6 h-6 lg:w-10 lg:h-10 mt-auto rounded-md bg-gray-100 text-neutral-500 p-1 lg:p-2" />
          </div>
        </div>
      ))}
    </dl>
  );
}
