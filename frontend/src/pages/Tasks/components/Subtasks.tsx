import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Subtasks = () => {
  return (
    <div>
      <section aria-labelledby="projects" className="mb-20">
        <header className="flex justify-between">
          <h2 className="sr-only" id="projects">
            Subtasks
          </h2>

          <h2 className="text-xl lg:text-2xl pb-4">Subtasks</h2>
        </header>

        <ul className="flex justify-center flex-col gap-3 overflow-hidden py-4 text-slate-500 text-sm bg-gray-50 border border-gray-100 shadow-sm px-4 h-auto">
          <li>
            <div className="flex flex-wrap justify-between items-center border border-gray-300 text-gray-400  w-full h-auto rounded-lg p-3">
              <div className="flex flex-wrap gap-2">
                <DocumentTextIcon className="w-5 h-5" />
                ID LG-21{" "}
                <span className="text-stone-800">
                  Components list of the best syst...
                </span>
              </div>

              <div>yesterday</div>
            </div>
          </li>
          <li>
            <button className="border-2 border-dashed text-orange-400 hover:text-orange-500 border-orange-400 hover:border-orange-500 w-full h-auto p-3 rounded-lg">
              + Create subtask
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Subtasks;
