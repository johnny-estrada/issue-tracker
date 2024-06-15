import { useState } from "react";

interface Props {
  titles: string[];
  initialActive?: string;
  onClick: (title: string) => void;
}

export default function ButtonGroup({ titles, initialActive, onClick }: Props) {
  const [active, setActive] = useState(initialActive || titles[0]);

  return (
    <div className="isolate inline-flex rounded-md">
      {titles.map((title) => (
        <button
          key={title}
          type="button"
          onClick={() => {
            setActive(title); // Set the active button
            onClick(title); // Trigger the onClick function
          }}
          className={`relative inline-flex items-center first:rounded-l-md 
            last:rounded-r-md px-2 py-0 lg:px-3 lg:py-2 text-sm lg:text-sm w-fit h-8 focus:z-10
            ${
              active === title
                ? "bg-stone-800 text-white ring-1 ring-inset ring-stone-800 shadow-sm pointer-events-none"
                : "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
