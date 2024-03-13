import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useGetAttachmentQuery } from "../../../services/state/redux/slices/attachmentsApiSlice";

interface Props {
  taskId: number;
  userId: number;
}

const Attachments = ({ taskId, userId }: Props) => {
  const [file, setFile] = useState("");
  const [taskI, setTaskI] = useState(0);
  const [userI, setUserI] = useState(0);
  const [image, setImage] = useState(
    "1710279204083_beautiful_model_person_portrait_pretty_woman-914793.jpg",
  );

  const { data: attachments } = useGetAttachmentQuery("");
  console.log(attachments);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/attachments?taskId=${taskId}`)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, [taskId]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setTaskI(taskId);
    setUserI(userId);
    console.log(taskId);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("taskId", taskI);
    formData.append("userId", userI);

    axios
      .post("http://localhost:5000/api/attachments", formData)
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
        <ul className="flex flex-wrap max-w-lg mb-2 gap-2.5 overflow-hidden py-4 text-slate-500 text-sm">
          {attachments?.map((attachment) => (
            <li
              key={attachment.id}
              className="w-32 h-28 border border-gray-200 shadow-sm mb-2.5"
            >
              {
                <img
                  className="w-32 h-28"
                  src={`http://localhost:5000/Uploads/${attachment.filename}`}
                  alt=""
                />
              }
            </li>
          ))}
        </ul>
        <form method="POST" encType="multipart/form-data">
          <div className="flex gap-2">
            <label
              htmlFor="file"
              className="flex gap-2 text-orange-400 hover:text-orange-500 mb-16 cursor-pointer"
            >
              <PaperClipIcon className="w-5 h-5" />
              Attach new file
            </label>
            <input id="file" type="file" name="file" onChange={handleFile} />
            <button type="button" onClick={handleUpload}>
              send
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Attachments;
