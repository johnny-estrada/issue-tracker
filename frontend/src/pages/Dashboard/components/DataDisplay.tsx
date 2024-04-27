import {
  ClockIcon,
  FolderIcon,
  ClipboardDocumentCheckIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

interface Project {
  hours: number;
}

interface Task {
  tasks: object[];
  status: string;
}

interface Props {
  projects: Project[];
  projectIndex: number;
  tasks: Task[];
  taskIndex: number;
}

export default function DataDisplay({
  projects,
  projectIndex,
  tasks,
  taskIndex,
}: Props) {
  const projectHours = projects[projectIndex].hours;
  console.log(projectHours);
  const y = tasks[9].status === "open";


  useEffect(() => {
    const projectCompleted = () => {
      const x: object[] = [];
  
      tasks?.map((task) => {
        if (projects[projectIndex].id === task.projectId) {
          x.push(task.id);
        } if (projects[projectIndex].id === task.projectId) {
          return tasks.length / x;
        }
      });
  
    
    };
    console.log(projectCompleted());
  }, [tasks, projects, projectIndex]
  )




  // tasks[taskIndex].status === 'open / tasks[taskIndex].status ';//task open / task completed (taskStatus)
  // const taskDue = ; //task  targetDate = today / task total = open
  // const newAssigned = ; // task total where userid = user;

  const stats = [
    { name: "Hours this week", stat: "32", icon: ClockIcon },
    { name: "Project completed", stat: "78", icon: FolderIcon },
    { name: "Tasks due", stat: "32", icon: ClipboardDocumentCheckIcon },
    { name: "Assigned to me", stat: "42", icon: ListBulletIcon },
  ];
  return (
    <>
      <dl className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-2.5 lg:gap-10  lg:px-0 ">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-2 py-2 lg:px-4 lg:py-4 shadow sm:p-6  lg:max-w-60"
          >
            <dt className="truncate text-sm lg:text-lg text-gray-900 mb-4 lg:mb-2">
              {stat.name}
            </dt>
            <div className="flex justify-between">
              <dd className="mt-1 text-base lg:text-3xl tracking-tight text-gray-900">
                {/* {projects[projectIndex].hours}{" "} */}
                {projectHours}
                <span className="text-sm lg:text-2xl">hrs</span>
              </dd>

              <stat.icon className="w-6 h-6 lg:w-10 lg:h-10 mt-auto rounded-md bg-gray-100 text-neutral-500 p-1 lg:p-2" />
            </div>
          </div>
        ))}
      </dl>
    </>
  );
}
