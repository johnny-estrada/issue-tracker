import AvatarGroup from "./AvatarGroup";

interface Props {
  projects: object[];
  onClick: (project: string) => void;
}

export default function SelectorList(props) {
  return (
    <>
      {props.length === 0 && <p>No items found</p>}

      <ul className="flex flex-col gap-2 overflow-hidden rounded-lg px-1 py-4">
        <li
          id={props.id}
          className={
            props.active
              ? "flex justify-between gap-x-6 px-4 py-4 sm:px-6 bg-stone-800  rounded-lg shadow ring-1 ring-gray-900/5 text-white"
              : "flex cursor-pointer justify-between gap-x-6 px-4 py-4 hover:bg-white sm:px-6 bg-gray-100 rounded-lg shadow ring-1 ring-gray-200/5"
          }
          onClick={props.onClick}
        >
          <div className="flex min-w-0 gap-x-4">
            <div className="hidden h-12 w-12 md:flex justify-center items-center rounded-full bg-white">
              <p>BK</p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6">{props.client}</p>
              <p className=" mt-1 flex text-xs leading-5 text-gray-400">
                <span className="inset-x-0 -top-px bottom-0" />
                {props.tasks} tasks &#x2022; {props.overdue} overdue
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <AvatarGroup />
            <p className="text-gray-400">
              {props.startDate} - {props.targetDate}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}