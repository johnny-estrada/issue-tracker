const Greeting = () => {
  const userName = "Johnny";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) timeOfDay = "morning";
  else if (hours >= 12 && hours <= 17) timeOfDay = "afternoon";
  else if (hours >= 17 && hours <= 24) timeOfDay = "evening";

  return (
    <div>
      <h3 className="font-semibold lg:mt-8 text-xs text-gray-500">
        {`Good ${timeOfDay}, ${userName}!`}
      </h3>
    </div>
  );
};

export default Greeting;
