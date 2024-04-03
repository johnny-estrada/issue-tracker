import { stats } from "../../../data/index";

interface Project {
  hours: number;
}

interface Props {
  projects: Project[];
  projectIndex: number;
}

export default function DataDisplay({ projects, projectIndex }: Props) {
  return (
    <>
      <dl className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-2.5 lg:gap-10 px-3 pb-4 lg:px-0 lg:pb-0">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-2 py-2 lg:px-4 lg:py-4 shadow sm:p-6  lg:max-w-60"
          >
            <dt className="truncate text-sm lg:text-lg text-gray-900 mb-4 lg:mb-2">
              {stat.name}
            </dt>
            <div className="flex justify-between">
              <dd className="mt-1 text-base lg:text-3xl tracking-tight text-gray-900">
                {projects[projectIndex].hours}{" "}
                <span className="text-2xl">Hrs</span>
              </dd>

              <stat.icon className="w-6 h-6 lg:w-10 lg:h-10 mt-auto rounded-md bg-gray-100 text-neutral-500 p-1 lg:p-2" />
            </div>
          </div>
        ))}
      </dl>
    </>
  );
}
