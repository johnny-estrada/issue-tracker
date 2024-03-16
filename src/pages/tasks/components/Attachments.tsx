import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useGetAttachmentQuery } from "../../../services/state/redux/slices/attachmentsApiSlice";

interface Props {
  taskId: number;
  userId: number | null;
  taskIndex: number;
  tasks: object[];
}

const Attachments = ({ taskId, userId, taskIndex, tasks }: Props) => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [taskI, setTaskI] = useState(0);
  const [userI, setUserI] = useState(0);

  const { data: attachments, refetch } = useGetAttachmentQuery("");

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/attachments?taskId=${taskId}`)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, [taskId]);

  const handleFile = async (e) => {
    setFile(e.target.files[0]);
    setTaskI(taskId);
    setUserI(userId);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("taskId", taskI);
    formData.append("userId", userI);

    try {
      await axios.post("http://localhost:5000/api/attachments", formData);
      refetch();
      toast.success("Attachment added successfully");
    } catch (err) {
      console.log(err);
      toast.error(`${err}`);
    }
  };

  return (
    <>
      <section aria-labelledby="attachments">
        <header className="flex items-baseline gap-3">
          <h3 className="sr-only" id="tasks">
            Attached files
          </h3>
          <h3 className="text-xl lg:text-2xl pb-4">Attached files</h3>
          <Link
            to="#"
            className="underline text-xs text-orange-400 hover:text-orange-500"
          >
            view all
          </Link>
        </header>

        {/* TASKS LIST */}
        <ul className="flex flex-wrap max-w-lg gap-3 overflow-hidden text-slate-500 text-sm">
          {attachments?.map(
            (attachment) =>
              attachment.taskId === tasks[taskIndex]?.id && (
                <li key={attachment.id}>
                  <div className="rounded-full">
                    <img
                      className="w-32 h-28 rounded"
                      src={`http://localhost:5000/Uploads/${attachment.filename}`}
                      alt=""
                    />
                  </div>
                </li>
              ),
          )}
          <li className="w-32 h-28 border border-gray-200 shadow-sm mb-2.5 rounded"></li>
        </ul>
        <form method="POST" encType="multipart/form-data">
          <div className="flex gap-2">
            <label
              htmlFor="file"
              className="flex gap-2 text-orange-400 hover:text-orange-500 mb-16 cursor-pointer"
            >
              <PaperClipIcon className="w-5 h-5" />
              <div className="hidden">Paper clip</div>
            </label>
            <button
              className="flex gap-2 text-orange-400 hover:text-orange-500 mb-16 cursor-pointer"
              type="button"
              onClick={handleUpload}
            >
              Attach new file
            </button>
            <input id="file" type="file" name="file" onChange={handleFile} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Attachments;
