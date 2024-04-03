import { formatDate } from "../../../utils/formatting";

interface User {
  name: string;
}

interface Props {
  created: string;
  users: User[];
  userIndex: number;
  updated: string;
}

const ActivityLog = ({ created, users, userIndex, updated }: Props) => {
  const createDate = users[userIndex]?.name;

  return (
    <div>
      <footer className="mb-14">
        <p className="text-xs text-neutral-500 mb-2">
          Created{" "}
          {formatDate({
            dateString: created,
            options: { month: "short", day: "numeric", year: "numeric" },
          })}{" "}
          by {createDate}
        </p>
        <p className="text-xs text-neutral-500">
          Last updated{" "}
          {formatDate({
            dateString: updated,
            options: { month: "short", day: "numeric", year: "numeric" },
          })}
          , by Yulia B
        </p>
      </footer>
    </div>
  );
};

export default ActivityLog;
