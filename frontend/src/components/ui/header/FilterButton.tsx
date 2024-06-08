import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import FunnelIcon from "./FunnelIcon";

export default function FilterButton() {
  return (
    <>
      <button type="button" className="lg:hidden">
        <AdjustmentsVerticalIcon className="w-7 h-7 fill-gray-700" />
      </button>

      <button
        type="button"
        className="hidden lg:flex justify-center align-middle mt-auto rounded-md bg-white px-3 pt-1.5 pb-0.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <div className="flex justify-center align-middle gap-1">
          <FunnelIcon />
          <span className="text-sm">Filter</span>
        </div>
      </button>
    </>
  );
}
