interface Props {
  priority: string;
}

export default function FlatBadge({ priority }: Props) {
  let badgeColor;

  switch (priority) {
    case "low":
      badgeColor = "bg-green-100 border border-green-200 text-neutral-500";
      break;
    case "medium":
      badgeColor = "bg-orange-100 border border-orange-200 text-neutral-500";
      break;
    case "high":
      badgeColor = "bg-red-100 border border-red-200 text-neutral-500";
      break;
    default:
      badgeColor = "bg-green-100 border border-gray-200 text-neutral-500";
      break;
  }

  return (
    <>
      <span
        className={`inline-flex shadow-sm items-center rounded-md px-3 text-xs font-medium py-1 w-fit ${badgeColor}`}
      >
        {priority}
      </span>
    </>
  );
}
