import { stats } from "../../data/index";

export default function DataDisplay() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-3 py-3 shadow sm:p-6  lg:max-w-60"
          >
            <dt className="truncate text-xs lg:text-sm font-medium text-gray-500 mb-4 lg:mb-8">
              {stat.name}
            </dt>
            <div className="flex justify-between">
              <dd className="mt-1 text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                {stat.stat}
              </dd>
              <stat.icon className="w-7 h-7 mt-3 rounded-md bg-gray-100 text-gray-900 p-1" />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
