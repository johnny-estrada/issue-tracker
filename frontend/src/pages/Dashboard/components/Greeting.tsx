import { useSelector, useDispatch } from "react-redux";
import { formatName } from "../../../utils/formatting";

const Greeting = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const userName = userInfo.name;
  const firstName = formatName(userName);

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) timeOfDay = "morning";
  else if (hours >= 12 && hours <= 17) timeOfDay = "afternoon";
  else if (hours >= 17 && hours <= 24) timeOfDay = "evening";

  return (
    <div>
      <h3 className="lg:text-sm text-[11px] text-neutral-500">
        {`Good ${timeOfDay}, ${firstName}!`}
      </h3>
    </div>
  );
};

export default Greeting;
