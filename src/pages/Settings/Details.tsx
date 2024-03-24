import FlatBadge from "../../components/ui/FlatBadge";

const Details = ({ users }) => {
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
              <li className="grid grid-cols-2 py-2">
                <p className="text-sm text-neutral-500">Status</p>
                <FlatBadge priority={"active"} />
              </li>
              <li className="grid grid-cols-2 py-2">
                <p className="text-sm text-neutral-500">Name</p>
                <p className="text-sm text-neutral-800">John Smith</p>
              </li>
              <li className="grid grid-cols-2 py-2">
                <p className="text-sm text-neutral-500">Email</p>
                <p className="text-sm font-medium text-neutral-800">
                  John@email.com
                </p>
              </li>
              <li className="grid grid-cols-2 py-2">
                <p className="text-sm text-neutral-500">Title</p>
                <p className="text-sm text-neutral-800">Project manager</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
