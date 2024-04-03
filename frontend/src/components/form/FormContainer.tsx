import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProjectMutation } from "../../state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";

interface Props {
  children: React.ReactNode;
}

const FormContainer = ({ children }: Props) => {
  const [title, _setTitle] = useState("");
  const [client, _setClient] = useState("");
  const [description, _setDescription] = useState("");
  const [status, _setStatus] = useState("");
  const [startDate, _setStartDate] = useState(new Date());
  const [targetDate, _setTargetDate] = useState(new Date());
  const [hours, _setHours] = useState("");
  const [members, _setMembers] = useState([]);

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

  return (
    <>
      {loadingCreate && <Loader />}

      <form className="bg-white  sm:rounded-xl pb-8" onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};

export default FormContainer;
