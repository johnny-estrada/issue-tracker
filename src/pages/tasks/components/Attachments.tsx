import { useState } from "react";
import { Link } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import axios from "axios"

const Attachments = () => {
  const [file, setFile] = useState("");
 
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post('http://localhost:5000/api/attachments', formData).then(res => {
   
        console.log(res.data)
  
    }).catch(err => console.log(err))
  }
 
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
        <ul className="flex gap-3 overflow-hidden py-4 text-slate-500 text-sm">
          <li className="w-32 h-28 border border-gray-200 shadow-sm"></li>
          <li className="w-32 h-28 border border-gray-200 shadow-sm"></li>
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

            <input
              id="file"
              type="file"
              name="file"
              onChange={handleFile}
            />
            <button type="button" onClick={handleUpload}>send</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Attachments;
