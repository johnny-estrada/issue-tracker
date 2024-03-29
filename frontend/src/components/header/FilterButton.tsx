import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import funnelIcon from "../../assets/images/icons/funnel.svg"

export default function FilterButton() {
  return (
    <>
      <button type="button" className="lg:hidden">
        <AdjustmentsVerticalIcon className="w-6 h-6 fill-stone-900" />
      </button>

      <button
        type="button"
        className="hidden lg:flex justify-center align-middle mt-auto rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <div className="flex justify-center align-middle gap-1">
          {/* <FunnelIcon className="h-4 w-4" /> */}
          <img src={funnelIcon} alt="" className="h-5 w-5" />
          <span className="text-sm">Filter</span>
        </div>
      </button>
    </>
  );
}
