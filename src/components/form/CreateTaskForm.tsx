import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../ui/Loader";
import Datepicker from "./ui/Datepicker";
import PeoplePicker from "./ui/PeoplePicker";
import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";

const CreateTaskForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date());
  const [projectId, setProjectId] = useState("");
  const [members, setMembers] = useState([]);

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  const [createTask, { isLoading: loadingCreate }] = useCreateTaskMutation();
  const { data: projects, refetch } = useGetProjectsQuery();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask({
        name,
        status,
        startDate,
        targetDate,
        projectId,
      }).unwrap();
      toast.success("Task created successfully");
      navigate("/projects");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {loadingCreate && <Loader />}

      <form
        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 w-1/3 ml-60 mb-60"
        onSubmit={handleSubmit}
      >
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="project"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project
              </label>
              <div className="mt-2">
                <select
                  id="project"
                  name="project"
                  autoComplete="project"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {projects?.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.title}-{project.id}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description*
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="description"
                  id="description"
                  autoComplete="description"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* <div className="sm:col-span-4">
              <label
                htmlFor="client"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Client*
              </label>
              <div className="mt-2">
                <input
                  id="client"
                  name="client"
                  type="text"
                  autoComplete="off"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  value={status}
                  onChange={handleStatusChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="To do">To do</option>
                  <option value="In progress">In progress</option>
                  <option value="Backlog">Backlog</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start date
              </label>
              <div className="mt-2">
                <Datepicker startDate={startDate} setStartDate={setStartDate} />
              </div>

              <label
                htmlFor="target-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Target date
              </label>
              <div className="mt-2">
                <Datepicker
                  startDate={targetDate}
                  setStartDate={setTargetDate}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Members
              </label>
              <PeoplePicker
                members={members}
                onChange={(updatedSelectedPeople) =>
                  setMembers(updatedSelectedPeople)
                }
              />
            </div>

            {/* <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hours
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="hours"
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Members
              </label>
              <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UsersIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 px-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="John Smith"
                  />
                </div>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <BarsArrowUpIcon
                    className="-ml-0.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Sort
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => navigate("/projects")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTaskForm;
