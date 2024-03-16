export default function FlatBadge(props) {
  let badgeColor;

  switch (props.priority) {
    case "low":
      badgeColor = "bg-green-50 text-green-800";
      break;
    case "medium":
      badgeColor = "bg-yellow-50 text-yellow-800";
      break;
    case "high":
      badgeColor = "bg-red-50 text-red-800";
      break;
    default:
      badgeColor = "bg-green-50 text-green-800";
      break;
  }

  return (
    <>
      <span
        className={`inline-flex items-center rounded-md px-3 text-xs font-medium h-8 w-fit ${badgeColor}`}
      >
        {props.priority}
      </span>
    </>
  );
}
