import Breadcrumbs from "./Breadcrumbs";
import Greeting from "../../../pages/Dashboard/components/Greeting";

interface IHeaderTitle {
  title: string;
  active: boolean;
}

const HeaderTitle = ({ title, active }: IHeaderTitle) => {
  return (
    <>
      {title && active ? (
        <>
          <div className="w-full">
            {title === "Dashboard" ? <Greeting /> : <Breadcrumbs />}
            <h1 className="text-3xl lg:text-4xl text-gray-900 line-clamp-1">
              {title}
            </h1>
          </div>
        </>
      ) : (
        <>
          <div className="w-full">
            <h1 className="text-3xl lg:text-4xl text-gray-900 line-clamp-1">
              {title}
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderTitle;
