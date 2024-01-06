function TwoColumns({ children }) {
  const [left, right] = children;

  return (
    <>
      <div className="lg:flex lg:gap-0 mt-11 bg-white">
        <main className="flex-1">
          <div className="xl:pr-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              {/* Main area */}
              {left}
            </div>
          </div>
        </main>

        <aside className="inset-y-0 right-0 w-2/5  border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          <div>
            {/* Secondary column (hidden on smaller screens) */}

            {/* <img src="./project-select.svg" width="200" height="200" alt="" />
            <p>Select a project to see its details</p> */}
            <section aria-labelledby="projects">{right}</section>
          </div>
        </aside>
      </div>
    </>
  );
}

export default TwoColumns;
