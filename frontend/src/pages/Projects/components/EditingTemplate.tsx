import { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProjectDetailsQuery,
  useUpdateProjectMutation,
} from "../../../state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../../components/ui/Loader";
import Datepicker from "../../../components/ui/Datepicker";

import PeoplePicker from "../../../components/ui/PeoplePicker";

type StatusOptions = {
  [key: string]: string[];
};

const EditingTemplate = () => {
  const { id: projectId } = useParams();
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>("");
  const [hours, setHours] = useState("");
  const [members, setMembers] = useState([]);

  const statusOptions: StatusOptions = {
    "on hold": ["on hold", "active", "closed"],
    active: ["active", "on hold", "closed"],
    closed: ["closed", "active", "on hold"],
  };

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  const {
    data: project,
    isLoading,
    refetch,
    error,
  } = useGetProjectDetailsQuery(projectId);

  const [updateProject] = useUpdateProjectMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await updateProject({
        projectId,
        title,
        description,
        client,
        status,
        startDate,
        targetDate,
        hours,
        team: members,
      }).unwrap();
      toast.success("Project updated successfully");
      refetch();
      navigate("/projects");
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setClient(project.client);
      setDescription(project.description);
      setStatus(project.status);
      setStartDate(project.startDate);
      setTargetDate(project.targetDate);
      setHours(project.hours);
      setMembers(project.team);
    }
  }, [project]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>error</p>
      ) : (
        <div className="space-y-10 divide-y divide-gray-900/10 border">
          <section className="pl-0 lg:pl-14 max-w-2xl mb-[73px] lg:mb-0">
            <form
              className="bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 rounded"
              onSubmit={handleSubmit}
            >
              <div className="px-4 py-6 sm:p-8 w-[600px]">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Project name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="off"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Project description
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
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="client"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Client
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
                  </div>

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
                        defaultValue={status}
                        onChange={handleStatusChange}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {statusOptions[status] ? (
                          statusOptions[status].map((option: string) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))
                        ) : (
                          <option value={status}>{status}</option>
                        )}
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
                      <Datepicker
                        startDate={startDate}
                        setStartDate={setStartDate}
                      />
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
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Hours
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="hours"
                        id="hours"
                        defaultValue={0}
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                </div>
              </div>
              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button
                  type="button"
                  className="text-sm leading-6 text-slate-600 hover:text-slate-800"
                  onClick={() => navigate("/projects")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-600 px-8 py-2 text-sm text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
      <></>
    </>
  );
};

export default EditingTemplate;
