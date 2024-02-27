interface Props {
  children: object[];
  id: string;
  active: boolean;
  onClick: (project: string) => void;
}

export default function SelectorList({ children, id, active, onClick }: Props) {
  return (
    <>
      {children.length === 0 && <p>No items found</p>}
      <ul>
        <li>
          <div
            onClick={onClick}
            id={id}
            className={
              active
                ? "flex justify-between gap-x-6 px-2 lg:px-4 py-2 lg:py-4 sm:px-6 bg-neutral-800  rounded-lg shadow ring-1 ring-gray-900/5 text-white w-full"
                : "w-full flex cursor-pointer justify-between gap-x-6 px-2 lg:px-4 py-2 lg:py-4 hover:bg-gray-200 sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5"
            }
          >
            {children}
          </div>
        </li>
      </ul>
    </>
  );
}
