import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Comments = () => {
  return (
    <div>
      <section aria-labelledby="projects" className="mb-28">
        <header className="flex justify-between">
          <h2 className="sr-only" id="projects">
            Activity
          </h2>

          <h2 className="text-xl lg:text-2xl">Activity</h2>
        </header>

        <ul className="flex flex-col gap-3 overflow-hidden py-4 text-slate-500 text-sm">
          <li>
            <div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <p className="text-slate-500">
                    <span className="text-sm font-semibold text-gray-900">
                      Mark B{" "}
                    </span>
                    added a comment:
                  </p>
                </div>

                <p>1 hour ago</p>
              </div>
              <div className="bg-gray-50 w-2/3 h-auto flex items-center p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-800">
                  The list of the best systems built and maintained by the
                  company with best practices
                </p>
              </div>
            </div>
          </li>
        </ul>

        <form className="flex gap-2 items-center">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex justify-center items-center border border-gray-400 px-3 shadow-sm rounded-lg w-full">
            <label htmlFor="comments" className="sr-only">
              comments
            </label>
            <input
              type="text"
              name="comments"
              className="w-full h-10 text-sm px-2"
              placeholder="Add a comment..."
            />
            <button className="pl-2">
              <PaperAirplaneIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Comments;
