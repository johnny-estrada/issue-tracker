interface Task {
  tasks: object[];
  description: string;
}

interface Props {
  taskIndex: number;
  tasks: Task[];
}

const Information = ({ taskIndex, tasks }: Props) => {
  return (
    <div>
      <section aria-labelledby="projects" className="mb-28">
        <header className="flex justify-between">
          <h2 className="sr-only" id="projects">
            Task Information
          </h2>

          <h2 className="text-xl lg:text-2xl">Task information</h2>
        </header>

        <div className="flex flex-col gap-3 overflow-hidden py-4 text-slate-500 text-xm">
          <p>{tasks?.[taskIndex]?.description}</p>
        </div>
      </section>
    </div>
  );
};

export default Information;
