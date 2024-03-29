import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import AvatarGroup from "./AvatarGroup";
import { formatDate } from "../../utils/formatting";

const Details = ({ description, client, startDate, targetDate, members }) => {
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  useEffect(() => {
    const date1 = startDate;
    const options1 = { year: "numeric", month: "short", day: "numeric" };
    const formatted1 = formatDate(date1, options1);
    setFormattedDate1(formatted1);

    const date2 = targetDate;
    const options2 = { year: "numeric", month: "short", day: "numeric" };
    const formatted2 = formatDate(date2, options2);
    setFormattedDate2(formatted2);
  }, [startDate, targetDate]);

  return (
    <section aria-labelledby="projects">
      <div className="max-w-[90%]">
        <p className="text-sm pb-5 text-neutral-500">{description}</p>
        <ul>
          <li className="flex justify-center py-2 items-center w-full">
            <p className="text-sm text-neutral-500 w-44">Client</p>
            <p className="flex-1 text-sm text-neutral-800">{client}</p>
          </li>
          <li className="flex justify-center py-2 items-center w-full">
            <p className="w-44 text-sm text-neutral-500">Start date</p>
            <p className="flex-1 text-sm font-medium text-neutral-800">
              {formattedDate1}
            </p>
          </li>
          <li className="flex justify-center py-2 items-center w-full">
            <p className="w-44 text-sm text-neutral-500">Target date</p>
            <p className="flex-1 text-sm font-medium text-neutral-800">
              {formattedDate2}
            </p>
          </li>
          <li className="flex justify-center py-2 items-center w-full">
            <p className="w-44 text-sm text-neutral-500">Members</p>
            <div className="flex-1 -space-x-2 overflow-hidden p-1">
              {members ? (
                <AvatarGroup members={members} />
              ) : (
                <UserCircleIcon
                  className="w-8 h-8 lg:h-12 lg:w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
