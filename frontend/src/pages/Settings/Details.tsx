import FlatBadge from "../../components/ui/FlatBadge";

interface Users {
  userInfo: object;
  name: string;
  email: string;
  status: string;
  title: string;
}

interface Props {
  userInfo: Users;
}

const Details = ({ userInfo }: Props) => {
  return (
    <section className="flex-1 px-4  lg:px-14 pt-4  lg:pt-10 border-l border-gray-200">
      <div className="hidden lg:block">
        <header className="flex justify-between">
          <h2 className="sr-only" id="account">
            Account details
          </h2>

          <h2 id="account" className="text-xl lg:text-2xl pb-4">
            Account details
          </h2>
        </header>
        <div aria-labelledby="projects">
          <div className="max-w-[90%]">
            <ul>
              <li className="flex justify-center py-2 items-center w-full">
                <p className="w-36 text-sm text-neutral-500">Status</p>
                <div className="flex-1">
                  <FlatBadge priority={userInfo.status || "active"} />
                </div>
              </li>
              <li className="flex justify-center py-2 items-center w-full">
                <p className="w-36 text-sm text-neutral-500">Name</p>
                <p className="flex-1 text-sm text-neutral-800">
                  {userInfo.name}
                </p>
              </li>
              <li className="flex justify-center py-2 items-center w-full">
                <p className="w-36 text-sm text-neutral-500">Email</p>
                <p className="flex-1 text-sm font-medium text-neutral-800">
                  {userInfo.email}
                </p>
              </li>
              <li className="flex justify-center py-2 items-center w-full">
                <p className="w-36 text-sm text-neutral-500">Title</p>
                <p className="flex-1 text-sm text-neutral-800">
                  {userInfo.title}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
