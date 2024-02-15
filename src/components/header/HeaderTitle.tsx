import Breadcrumbs from "./Breadcrumbs";
import Greeting from "../../pages/dashboard/components/Greeting";

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  return (
    <>
      <div>
        {title === "Dashboard" ? <Greeting /> : <Breadcrumbs />}
        <h1 className="text-3xl lg:text-4xl text-gray-900">{title}</h1>
      </div>
    </>
  );
};

export default HeaderTitle;
