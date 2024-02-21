import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Status = () => {
  return (
    <>
      <div className="flex flex-col items-center border border-gray-100 px-10 py-5 h-full shadow-sm rounded-lg">
        <header className="flex">
          <ChevronLeftIcon className="h-4 w-4 mr-5" />
          June 30 - July 30
          <ChevronRightIcon className="h-4 w-4 ml-5" />
        </header>
        <Link
          to="/tasks"
          className="underline text-xs text-orange-400 hover:text-orange-500 mb-5"
        >
          view all
        </Link>
        <div className="flex justify-center items-center rounded-full w-28 h-28 border-2 border-orange-500 mb-5">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">
              80<span className="text-xl">%</span>
            </p>
            <p className="text-xs">completed</p>
          </div>
        </div>

        <p>You're doing good!</p>
        <p>You almost reached your goal.</p>
      </div>
    </>
  );
};

export default Status;
