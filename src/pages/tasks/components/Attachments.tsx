import { Link } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/24/outline";

const Attachments = () => {
  return (
    <>
      <section aria-labelledby="attachments">
        <header className="flex items-baseline gap-3">
          <h3 className="sr-only" id="tasks">
            Attached files
          </h3>
          <h3 className="text-xl lg:text-2xl pb-4">Attached files</h3>
          <Link
            to="#"
            className="underline text-xs text-orange-400 hover:text-orange-500"
          >
            view all
          </Link>
        </header>

        {/* TASKS LIST */}
        <ul className="flex gap-3 overflow-hidden py-4 text-slate-500 text-sm">
          <li className="w-32 h-28 border border-gray-200 shadow-sm"></li>
          <li className="w-32 h-28 border border-gray-200 shadow-sm"></li>
        </ul>

        <a
          href="#"
          className="flex gap-2 text-orange-400 hover:text-orange-500 mb-16"
        >
          <PaperClipIcon className="w-5 h-5" />
          Attach new file
        </a>
      </section>
      <footer>
        <p className="text-sm text-neutral-500">
          Created July 3, 2023 by Yulia B
        </p>
        <p className="text-sm text-neutral-500">Last updated now, by Yulia B</p>
      </footer>
    </>
  );
};

export default Attachments;
