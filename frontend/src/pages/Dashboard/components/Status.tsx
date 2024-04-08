import { Link } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { startOfWeek, endOfWeek, format } from "date-fns";

const Status = () => {
  // Get the start and end dates of the current week
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

  // Format the dates for display
  const formattedStartDate = format(startDate, "MMM dd");
  const formattedEndDate = format(endDate, "MMM dd");

  return (
    <div className="w-full lg:w-72 mb-5">
      <div className="flex flex-col items-center lg:ring-1 lg:ring-gray-200 lg:px-3 lg:py-5 h-full lg:shadow rounded-lg lg:mb-2 w-60 lg:w-72">
        <header className="flex text-sm leading-2 lg:leading-0 font-semibold ">
          <ChevronLeftIcon className="h-5 w-5 mr-5" />
          {`${formattedStartDate} - ${formattedEndDate}`}
          <ChevronRightIcon className="h-5 w-5 ml-5" />
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

        <p className="text-sm text-neutral-900 font-semibold line-clamp-1">
          You&apos;re doing good!
        </p>
        <p className="text-sm text-neutral-500 line-clamp-1">
          You almost reached your goal.
        </p>
      </div>
    </div>
  );
};

export default Status;
