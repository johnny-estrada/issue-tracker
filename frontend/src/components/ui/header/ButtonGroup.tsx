import { useState } from "react";

interface Props {
  titles: object[string];
  onFilter: (filterType: string) => void;
}

export default function ButtonGroup({ titles, onFilter }: Props) {
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
          className={`relative inline-flex items-center first:rounded-l-md 
            last:rounded-r-md px-2 py-0 lg:px-3 lg:py-2 text-xs lg:text-sm 
            ring-1 ring-inset focus:z-10 shadow-sm w-fit h-8
            ${
              active === title
                ? "bg-stone-800 text-white ring-stone-800 pointer-events-none"
                : "bg-white text-gray-900 ring-gray-300 hover:bg-gray-50"
            }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
