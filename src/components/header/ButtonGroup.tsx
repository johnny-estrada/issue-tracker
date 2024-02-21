// interface Props {
//   titles: object[];
//   title: string;
// }

export default function ButtonGroup({ titles, onFilter }) {
  return (
    <div className="isolate inline-flex rounded-md">
      {titles?.map((title, i) => (
        <>
          <button
            key={title.id}
            type="button"
            onClick={() => onFilter(title)}
            value={title}
            className="relative inline-flex items-center first:rounded-l-md last:rounded-r-md bg-white px-2.5 py-0 lg:px-3 
            lg:py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 
            focus:z-10 shadow-sm w-fit h-8"
          >
            {title}
          </button>
        </>
      ))}
    </div>
  );
}
