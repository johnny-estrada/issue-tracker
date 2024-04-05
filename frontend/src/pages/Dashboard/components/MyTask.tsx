import { Link } from "react-router-dom";
import ShowHideList from "../components/ShowHideList";
import Menu1 from "../../../components/ui/Menu1";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";

interface Project {
  projects: object[];
  id: number;
  team: object[];
}

interface Task {
  projects: object[];
  id: number;
  name: string;
  description: string;
  priority: string;
  startDate: string;
  targetDate: string;
  status: string;
  projectId: string;
}

interface Nav {
  navigation: object[];
  href: string;
  name: string;
  photo: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

interface Props {
  id: string;
  projectIndex: number;
  projects: Project[];
  tasks: Task[];
  dates: object[];
  refetch: any;
}

const MyTask = ({
  id,
  projectIndex,
  projects,
  tasks,
  refetch,
}: Props) => {
  const NAV: Nav[] = [
    {
      name: "Create task",
      href: "/tasks/create-task",
      icon: PlusIcon,
    },
    {
      name: "Edit task",
      href: `/tasks/edit-task/${id}`,
      icon: PencilSquareIcon,
    },
  ];

  return (
    <>
      <section aria-labelledby="projects" className="hidden lg:block">
        <header className="hidden lg:flex justify-between pb-5">
          <div className="flex items-baseline gap-3">
            <h2 className="sr-only" id="tasks">
              My tasks
            </h2>
            <h2 className="text-2xl">My tasks</h2>
            <Link
              to="/tasks"
              className="underline text-xs text-orange-400 hover:text-orange-500"
            >
              view all
            </Link>
          </div>

          <Menu1
            id={tasks[projectIndex].id}
            refetch={refetch}
            navigation={NAV}
            delete1={"Delete task"}
          />
        </header>

        <ShowHideList
          projectIndex={projectIndex}
          projects={projects}
          tasks={tasks}
        />
      </section>
    </>
  );
};

export default MyTask;
