import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SelectorList from "../../../components/ui/SelectorList";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import ListMenu from "../../../components/ui/ListMenu";
import Menu1 from "../../../components/ui/Menu1";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const NotificationsList = ({projects, projectIndex, toggleProjects}) => {
    const NAV = [
        {
          name: "Dashboard",
          href: "/",
          icon: PlusIcon,
          current: true,
        },
        {
          name: "Projects",
          href: "/projects",
          icon: PlusIcon,
          current: true,
        },
        {
          name: "Tasks",
          href: "/tasks",
          icon: PlusIcon,
          current: true,
        },
      ];

  return (
    <>
        <section aria-labelledby="notifications">
          <header className="flex justify-between">
            <div className="flex gap-3">
              <h2 className="sr-only" id="notifications">
                All Notifications
              </h2>

              <h2 className="text-xl p-1">All notifications</h2>
              <button className="text-xs text-orange-400 hover:text-orange-500 p-1">
                mark all as read
              </button>
            </div>

            <div className="flex items-center">
              <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#" className="hover:bg-gray-50 rounded-full p-3">
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="w-4 h-4 hover:bg-gray-100 rounded-full"
                  aria-hidden="true"
                />
              </a>
            </div>
          </header>

          <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
            {projects?.map((project, idx) => (
              <SelectorList
                key={project.id}
                id={idx}
                active={projectIndex === idx}
                onClick={toggleProjects}
              >
                <div className="flex min-w-0 gap-x-4">
                  <AvatarGroup members={project.team} />
                  <div className="min-w-0 flex-auto">
                    <h4 className="text-sm font-semibold leading-6">
                      Johnny Estrada{" "}
                      <span className="text-sm font-normal">
                        commented on task ID-321A
                      </span>
                    </h4>
                    <p className="flex text-xs leading-5 text-gray-400">
                      <span className="inset-x-0 -top-px bottom-0" />
                      an hour ago
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <button className="text-gray-400 text-xs">
                    <ListMenu />
                  </button>
                </div>
              </SelectorList>
            ))}
          </div>
        </section>
    </>
  )
}

export default NotificationsList