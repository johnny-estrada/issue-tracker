import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetTaskDetailsQuery,
  useUpdateTaskMutation,
} from "../../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../../services/state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../../components/ui/Loader";
import Datepicker from "../../../components/ui/Datepicker";

import PeoplePicker from "../../../components/ui/PeoplePicker";

const EditTaskForm = () => {
  const { id: taskId } = useParams();
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

  const {
    data: task,
    isLoading,
    refetch,
    error,
  } = useGetTaskDetailsQuery(taskId);

  const [updateTask, { isLoading: loadingUpdate }] = useUpdateTaskMutation();
  const { data: projects } = useGetProjectsQuery();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTask({
        taskId,
        name,
        status,
        startDate,
        targetDate,
        projectId,
        team: members,
      }).unwrap();
      toast.success("Task updated successfully");
      refetch();
      navigate("/tasks");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (task) {
      setName(task.name);
      setStatus(task.status);
      setStartDate(new Date(task.startDate));
      setTargetDate(new Date(task.targetDate));
      setProjectId(task.projectId);
      setMembers(task.team);
    }
  }, [task]);

  return (
    <>
      {loadingUpdate ? (
        <Loader />
      ) : error ? (
        <p>error</p>
      ) : (
        <div className="space-y-10 divide-y divide-gray-900/10">
          <div className="px-8 max-w-2xl">
            <form
              className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
              onSubmit={handleSubmit}
            >
              {isLoading && <Loader />}
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-slate-500"
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
                      className="block text-sm font-medium leading-6 text-slate-500"
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

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium leading-6 text-slate-500"
                    >
                      Status
                    </label>
                    <div className="mt-2">
                      <select
                        id="status"
                        name="status"
                        autoComplete="status-name"
                        defaultValue={status}
                        onChange={handleStatusChange}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                        <option value="On hold">On hold</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="start-date"
                      className="block text-sm font-medium leading-6 text-slate-500"
                    >
                      Start date
                    </label>
                    <div className="mt-2">
                      <Datepicker
                        startDate={startDate}
                        setStartDate={setStartDate}
                      />
                    </div>

                    <label
                      htmlFor="target-date"
                      className="block text-sm font-medium leading-6 text-slate-500"
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
                      className="block text-sm font-medium leading-6 text-slate-500"
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
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button
                  type="button"
                  className="text-sm leading-6 text-gray-900"
                  onClick={() => navigate("/tasks")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <></>
    </>
  );
};

export default EditTaskForm;
