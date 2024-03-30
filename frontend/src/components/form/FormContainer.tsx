import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProjectMutation } from "../../state/redux/slices/projectsApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";

interface Props {
  children: React.ReactNode;
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

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

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
