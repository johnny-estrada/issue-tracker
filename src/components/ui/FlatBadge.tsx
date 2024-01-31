export default function FlatBadge(props) {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-green-50 px-3 text-xs font-medium text-green-800 h-8 w-fit">
        {props.priority}
      </span>
      {/* <span className="inline-flex items-center rounded-md bg-red-50 px-3 text-xs font-medium text-red-800 h-8 w-fit">
        high
      </span>
      <span className="inline-flex items-center rounded-md bg-orange-50 px-3 text-xs font-medium text-orange-800 h-8 w-fit">
        medium
      </span> */}
    </>
  );
}
