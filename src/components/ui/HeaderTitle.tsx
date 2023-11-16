import Greeting from "./Greeting";

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  return (
    <>
      <div className="">
        <Greeting />
        <h1 className="mt-1 text-3xl lg:text-4xl leading-6 text-gray-900">
          {title}
        </h1>
      </div>
    </>
  );
};

export default HeaderTitle;
