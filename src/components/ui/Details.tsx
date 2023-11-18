import ListMenu from "../ui/ListMenu";
import AvatarGroup from "./AvatarGroup";

const Details = (props) => {
  return (
    <section aria-labelledby="projects">
      <h2 className="sr-only" id="projects">
        All Projects
      </h2>
      <div className="flex  justify-between">
        <h2 className="text-xl pb-4">{props.title}</h2>
        <ListMenu />
      </div>
      <p className="pb-2">{props.description}</p>

      <ul className="w-2/3">
        <li className="flex flex-wrap justify-between py-2">
          <h4>Client</h4>
          <p>{props.client}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Start date</h4>
          <p>{props.startDate}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Target date</h4>
          <p>{props.targetDate}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Members</h4>
          <AvatarGroup />
        </li>
      </ul>
    </section>
  );
};

export default Details;
