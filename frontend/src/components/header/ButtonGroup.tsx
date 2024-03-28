import { useState } from "react";

// interface Props {
//   titles: object[];
//   onFilter: void;
// }

export default function ButtonGroup({ titles, onFilter }) {
  const [active, setActive] = useState(titles[0]);

  return (
    <div className="isolate inline-flex rounded-md">
      {titles?.map((title: string) => (
        <button
          key={title}
          type="button"
          onClick={() => {
            setActive(title); // Set the active button
            onFilter(title); // Trigger the filter function
          }}
          value={title}
          className={
            active === title
              ? "relative inline-flex items-center first:rounded-l-md last:rounded-r-md bg-stone-800 px-2.5 py-0 lg:px-3 lg:py-2 text-sm text-white ring-1 ring-inset ring-stone-800 focus:z-10 shadow-sm w-fit h-8 pointer-events-none"
              : "relative inline-flex items-center first:rounded-l-md last:rounded-r-md bg-white px-2.5 py-0 lg:px-3 lg:py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 shadow-sm w-fit h-8"
          }
        >
          {title}
        </button>
      ))}
    </div>
  );
}
