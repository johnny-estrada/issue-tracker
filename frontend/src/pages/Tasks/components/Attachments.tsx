import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import pdfFile from "../../../assets/images/png/file-logos/pdf-icon.png";
import textFile from "../../../assets/images/webp/file-logos/text-icon.webp";

import axios from "axios";
import { useGetAttachmentQuery } from "../../../state/redux/slices/attachmentsApiSlice";
import Loader from "../../../components/ui/Loader";

interface Props {
  taskId: number;
  userId: number;
  taskIndex: number;
  tasks: Task[];
}

interface Task {
  id: number;
}

interface Attachment {
  id: string;
  filename: string;
  mimetype: string;
  taskId: number;
}

const Attachments = ({ taskId, userId, taskIndex, tasks }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState("");
  const [_image, setImage] = useState("");
  const [taskI, setTaskI] = useState(0);
  const [userI, setUserI] = useState(0);
  const [_preview, setPreview] = useState<string | null>(null);

  const { data: attachments, isLoading, refetch } = useGetAttachmentQuery("");

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  useEffect(() => {
    axios
      .get(`https://localhost:5000/api/attachments?taskId=${taskId}`)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, [taskId]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    setTaskI(taskId);
    setUserI(userId);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const uploadFile = async () => {
    const cloudName = "dm1cbmiwq";
    const presetKey = "t9ew2cj4";
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", presetKey);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
        );

        const imageName = response.data.url;
        setPhoto(imageName);
        toast.success("Attachment added successfully");
        refetch(); // If you need to refetch the attachments after upload
      } catch (error) {
        toast.error(`Error uploading image: ${error}`);
      }
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <>
      {isLoading && <Loader />}
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
        <ul className="flex flex-wrap max-w-sm gap-3 overflow-hidden text-slate-500 text-sm">
          {attachments?.map(
            (attachment: Attachment) =>
              attachment.taskId === tasks[taskIndex]?.id && (
                <li key={attachment.id}>
                  <button className="shadow-sm border border-gray-100 w-28 rounded-lg bg-gray-100 hover:bg-gray-200 mb-4">
                    <p className="my-3 text-xs text-gray-800 font-semibold line-clamp-1">
                      {attachment.filename.split("_")[1]}
                    </p>
                    {attachment.mimetype.split("/")[0] === "text" ||
                    attachment.mimetype.split("/")[0] === "application" ? (
                      <>
                        {attachment.mimetype.split("/")[1] === "pdf" ? (
                          <>
                            <img
                              className="w-full h-20 rounded m-auto"
                              src={pdfFile}
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <img
                              className="w-full h-20 rounded m-auto"
                              src={textFile}
                              alt=""
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {" "}
                        <img
                          className="w-full h-20 rounded m-auto"
                          src={`https://localhost:5000/Uploads/${attachment.filename}`}
                          alt=""
                        />
                      </>
                    )}
                  </button>
                </li>
              ),
          )}
          {_preview && (
            <li className="flex items-center justify-center w-38 h-28 mb-2.5 rounded text-sm border p-2 shadow-sm">
              <img
                src={_preview}
                alt="Preview"
                className="max-w-full max-h-full"
              />
            </li>
          )}
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
              className="flex gap-2 text-orange-400 hover:text-orange-500 mb-16 cursor-pointer text-sm"
              type="button"
              onClick={uploadFile}
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
