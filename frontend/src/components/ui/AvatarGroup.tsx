import { UserCircleIcon } from "@heroicons/react/24/solid";

interface Member {
  id: string;
  photo: string;
}

interface Props {
  members: Member[];
}

export default function AvatarGroup({ members }: Props) {
  if (!Array.isArray(members)) {
    // Handle the case where members is not an array (e.g., set members to an empty array)
    members = [];
  }

  const firstThreeMembers = members.slice(0, 3);
  const remainingMembersCount = members.length - 3;

  return (
    <>
      <div className="flex -space-x-2 overflow-hidden p-1">
        {firstThreeMembers?.map((member) =>
          member?.photo ? (
            <img
              key={member.id} // Add a unique key for each mapped element
              className="inline-block h-6 w-6 rounded-full ring-1 ring-white"
              src={member.photo}
              alt=""
            />
          ) : (
            <UserCircleIcon
              key={member.id} // Add a unique key for each mapped element
              className="h-7 w-7 text-gray-300"
              aria-hidden="true"
            />
          ),
        )}
        {members.length > 3 && (
          <div className="flex items-center justify-center h-6 w-6 rounded-full ring-1 ring-white bg-neutral-800 text-white text-xs">
            <div>+{remainingMembersCount}</div>
          </div>
        )}
      </div>
    </>
  );
}
