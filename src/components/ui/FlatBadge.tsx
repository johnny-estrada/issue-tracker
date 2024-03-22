export default function FlatBadge(props) {
  let badgeColor;

  switch (props.priority) {
    case "low":
      badgeColor = "bg-green-100 text-neutral-500";
      break;
    case "medium":
      badgeColor = "bg-orange-100 text-neutral-500";
      break;
    case "high":
      badgeColor = "bg-red-100 text-neutral-500";
      break;
    default:
      badgeColor = "bg-green-100 text-neutral-500";
      break;
  }

  return (
    <>
      <span
        className={`inline-flex shadow-sm items-center rounded-md px-3 text-xs font-medium py-1 w-fit ${badgeColor}`}
      >
        {props.priority}
      </span>
    </>
  );
}
