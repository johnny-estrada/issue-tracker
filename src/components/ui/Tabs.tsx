import { Tab } from "@headlessui/react";
import LineChart from "./charts/LineChart";
import ShowHideList from "../ui/ShowHideList";
import SelectorList from "../ui/SelectorList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  width: number;
  height: number;
  data: object[];
  tasks: object[];
  projects: object[];
  onSelectItem: Event;
}

export default function Tabs({
  width,
  height,
  data,
  tasks,
  projects,
  onSelectItem,
}: Props) {
  return (
    <div className="lg:hidden w-full px-2 py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm font-semibold leading-5 text-stone-800",
                selected
                  ? "border-stone-800"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
              )
            }
          >
            Statistics
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm font-semibold leading-5 text-stone-800",
                selected
                  ? "border-stone-800"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
              )
            }
          >
            My Tasks
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm font-semibold leading-5 text-stone-800",
                selected
                  ? "border-stone-800"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
              )
            }
          >
            My Projects
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              " p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <LineChart width={width} height={height} data={data} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              " p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <ShowHideList tasks={tasks} />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              " p-3",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <SelectorList projects={projects} onSelectItem={onSelectItem} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
