import { FunnelIcon } from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";

export default function FilterButton() {
  return (
    <>
      <button type="button" className="lg:hidden">
        <AdjustmentsVerticalIcon className="w-6 h-6 fill-stone-900" />
      </button>
      <button
        type="button"
        className="hidden lg:block rounded-md bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <div className="flex gap-1">
          <FunnelIcon className="h-5 w-5" />
          <span className="text-sm">Filter</span>
        </div>
      </button>
    </>
  );
}
