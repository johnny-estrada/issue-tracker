import { SyntheticEvent } from "react";

interface Props {
  children: object[];
  id: string;
  active: boolean | undefined;
  onClick: (e: SyntheticEvent) => void;
}

export default function SelectorList({ children, id, active, onClick }: Props) {
  return (
    <>
      {children.length === 0 && <p>No items found</p>}
      <ul>
        <li>
          <button
            onClick={onClick}
            id={id}
            className={
              active
                ? "flex flex-wrap  justify-between items-center gap-x-6 px-2 lg:px-2 py-2 lg:py-2 sm:px-6 bg-neutral-800  rounded-lg shadow ring-1 ring-gray-900/5 text-white w-full"
                : " flex-wrap w-full flex cursor-pointer items-center justify-between gap-x-6 px-2 lg:px-2 py-2 lg:py-2 hover:bg-gray-200 sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5 text-neutral-500"
            }
          >
            {children}
          </button>
        </li>
      </ul>
    </>
  );
}
