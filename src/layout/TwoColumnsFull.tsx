import { Link } from "react-router-dom";
import Tabs from "../components/ui/Tabs";
import ListMenu from "../components/ui/ListMenu";
import { projects, lineChart, barChart } from "../data/index";

const TwoColumnsFull = ({ children }) => {
  const [left, right, bottom] = children;

  return (
    <div>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-0 mt-11 bg-white">
        <Tabs data={lineChart} projectData={projects} />

        {/* column-1 */}
        <div>
          <section aria-labelledby="tasks">
            <h2 className="sr-only" id="tasks">
              My tasks
            </h2>
            <div className="overflow-hidden">
              <div className="px-6 hidden lg:block">
                <div className="hidden lg:flex justify-between pt-8 pb-5">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-xl font-regular">My tasks</h2>
                    <Link
                      to="/tasks"
                      className="underline text-sm text-orange-400 hover:text-orange-500"
                    >
                      view all
                    </Link>
                  </div>

                  <ListMenu />
                </div>
                {left}
              </div>
            </div>
          </section>
        </div>

        {/* column 2 and 3 */}
        <aside className="lg:col-span-2">
          <section aria-labelledby="statistics">
            <h2 className="sr-only" id="statistics">
              Statistics
            </h2>
            <div className="overflow-hidden rounded-lg">
              <div className="px-10 hidden lg:block">
                <div>
                  <h2 className="text-xl pt-8">Statistics</h2>
                  <p className="mb-5 text-sm font-semibold text-gray-500">
                    tasks created vs tasks completed
                  </p>
                  <div className="flex h-58">{right}</div>
                  <h2 className="sr-only" id="projects">
                    My projects
                  </h2>
                  <div className="flex  justify-between">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-xl pb-4">My projects</h2>
                      <Link
                        to="/projects"
                        className="underline text-sm text-orange-400 hover:text-orange-500"
                      >
                        view all
                      </Link>
                    </div>

                    <ListMenu />
                  </div>
                  {bottom}
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default TwoColumnsFull;
