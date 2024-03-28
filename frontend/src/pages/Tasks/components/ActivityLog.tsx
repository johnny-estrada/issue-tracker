const ActivityLog = ({ created, users, userIndex, updated }) => {
  const createDate = users[userIndex]?.name;

  return (
    <div>
      <footer className="mb-14">
        <p className="text-xs text-neutral-500 mb-2">
          Created {created} by {createDate}
        </p>
        <p className="text-xs text-neutral-500">
          Last updated {updated}, by Yulia B
        </p>
      </footer>
    </div>
  );
};

export default ActivityLog;
