import { useState, SyntheticEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProjectMutation } from "../../../state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../../components/ui/Loader";
import Datepicker from "../../../components/ui/Datepicker";
import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";
import PeoplePicker from "../../../components/ui/PeoplePicker";

interface Member {
  members: object[];
}

const CreateProjectForm = () => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<string>("active");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const [hours, setHours] = useState("");
  const [members, setMembers] = useState<Member[]>();

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  const [createProject, { isLoading: loadingCreate }] =
    useCreateProjectMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await createProject({
        title,
        description,
        client,
        status,
        startDate,
        targetDate,
        hours,
        team: members,
      }).unwrap();
      toast.success("Project created successfully");
      navigate("/projects");
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {loadingCreate && <Loader />}
      <div className="space-y-10 divide-y divide-slate-800/10 border">
        <section className="lg:px-8 max-w-2xl m-auto lg:ml-4 mt-3">
          <form
            className="bg-white mb-[72px] lg:mb-24 rounded shadow"
            onSubmit={handleSubmit}
          >
            <div className="px-6 lg:px-8 py-6 lg:py-8 sm:p-8 h-full">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="client"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    Client name
                  </label>
                  <div className="mt-2">
                    <input
                      id="client"
                      name="client"
                      type="text"
                      autoComplete="off"
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      className="block w-full rounded-md py-1.5 px-3 bg-white text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-slate-800"
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
                      className="block w-full rounded-md border-0 py-1.5 px-3 bg-white text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="flex gap-10 flex-wrap justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor="start-date"
                      className="block text-sm font-medium leading-6 text-slate-800"
                    >
                      Start date
                    </label>
                    <div className="mt-2">
                      <Datepicker
                        startDate={startDate}
                        setStartDate={setStartDate}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="target-date"
                      className="block text-sm font-medium leading-6 text-slate-800"
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
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="description"
                      id="description"
                      autoComplete="description"
                      defaultValue={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-3 bg-white text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex gap-10 flex-wrap justify-between">
                  <div className="flex-1 sm:col-span-4">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium leading-6 text-slate-800"
                    >
                      Status
                    </label>
                    <div className="mt-2">
                      <select
                        id="status"
                        name="status"
                        onChange={handleStatusChange}
                        className="block w-full rounded-md border-0 py-1.5 px-3 bg-white text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="Active">active</option>
                        <option value="Closed">closed</option>
                        <option value="On hold">on hold</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1 sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-slate-800"
                    >
                      Time (hours)
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="hours"
                        id="hours"
                        defaultValue={0}
                        // value={hours}
                        onChange={(e) => setHours(e.target.defaultValue)}
                        className="block w-full rounded-md border-0 py-1.5 px-3 bg-white text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-slate-800"
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
            <div className="flex items-center justify-end gap-x-6 border-t border-slate-800/10 px-5 py-5 lg:px-6 lg:py-6 mt-8  sm:px-8">
              <button
                type="button"
                className="text-sm font-semibold hover:text-slate-800 leading-6 text-slate-600"
                onClick={() => navigate("/projects")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-orange-600 px-8 py-2 text-sm text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default CreateProjectForm;
