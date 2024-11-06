import WelcomeImg from "./WelcomeIcon";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

const Welcome = () => {
  return (
    <div className="flex justify-center m-auto h-full lg:h-[670px] pb-20">
      <div className="flex flex-col items-end justify-center">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-slate-800 font-semibold text-lg lg:text-xl mt-1 lg:mt-8 tracking-wide">
            Welcome to Klarity
          </h4>
          <p className="text-slate-600 text-sm lg:text-base mt-1 lg:mt-2 mb-8 tracking-wide">
            Create a project to get started
          </p>
          <WelcomeImg />
          <Link
            to="/projects/create"
            className="hidden lg:flex justify-center items-center rounded-md border border-dashed border-orange-500 px-16 py-4 text-sm lg:text-base text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-10"
          >
            <PlusIcon className="w-5 h-5 mr-1" />
            <p className="tracking-wide">Create project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
