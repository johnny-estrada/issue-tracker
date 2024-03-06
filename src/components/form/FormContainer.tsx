import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProjectMutation } from "../../services/state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";
import Datepicker from "../../components/ui/Datepicker";
import PeoplePicker from "../../components/ui/PeoplePicker";
import { BarsArrowUpIcon, UsersIcon } from "@heroicons/react/20/solid";

interface Props {
  children: object;
}

const FormContainer = ({ children }: Props) => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [targetDate, setTargetDate] = useState(new Date());
  const [hours, setHours] = useState("");
  const [members, setMembers] = useState([]);

  const history = useNavigate();

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  const [createProject, { isLoading: loadingCreate }] =
    useCreateProjectMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
        className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </>
  );
};

export default FormContainer;
