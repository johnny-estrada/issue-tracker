const tabs = [
    { name: 'Statistics', href: '#', current: true },
    { name: 'My tasks', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabs() {
    return (
      <>
        <div className="lg:hidden block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-between" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-4 px-4 text-sm font-semibold sm:px-8'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </>
    )
  }
  