const stats = [
    { name: 'Hours this week', stat: '32' },
    { name: 'Project completed', stat: '78%' },
    { name: 'Tasks due', stat: '32%' },
    { name: 'Assigned to me', stat: '42' },
  ]
  
  export default function DataDisplay() {
    return (
      <>
        <dl className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6  lg:max-w-60">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </>
    )
  }
  