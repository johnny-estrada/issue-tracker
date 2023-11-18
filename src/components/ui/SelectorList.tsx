import React from "react";
interface Props {
  children: object[];
  id: number;
  active: boolean;
  onClick: (project: string) => void;
}

export default function SelectorList({ children, id, active, onClick }: Props) {
  return (
    <>
      {children.length === 0 && <p>No items found</p>}

      <ul className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
        <li
          id={id}
          className={
            active
              ? "flex justify-between gap-x-6 px-4 py-4 sm:px-6 bg-stone-800  rounded-lg shadow ring-1 ring-gray-900/5 text-white"
              : "flex cursor-pointer justify-between gap-x-6 px-4 py-4 hover:bg-white sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5"
          }
          onClick={onClick}
        >
          {children}
        </li>
      </ul>
    </>
  );
}
