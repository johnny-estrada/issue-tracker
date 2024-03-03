import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetTaskQuery } from "../../services/state/redux/slices/tasksApiSlice";
import { useGetProjectsQuery } from "../../services/state/redux/slices/projectsApiSlice";
import ListMenu from "../../components/ui/ListMenu";
import Loader from "../../components/ui/Loader";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { formatDate } from "../../utils/formatting";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUsersQuery,
} from "../../services/state/redux/slices/usersApiSlice";
import { setCredentials } from "../../services/state/redux/slices/authSlice";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Details from "../../components/ui/Details";

const ProfileDetails = () => {
  const { id } = useParams();
  const [taskIndex, setTaskIndex] = useState(0);

  const { data: projects } = useGetProjectsQuery();
  const { data: tasks, isLoading: load } = useGetTaskQuery();
  const [file, setFile] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast({
        toastId: customId,
      });
    }
  };

  const preset_key = "t9ew2cj4";
  const cloud_name = "dm1cbmiwq";

  const uploadFile = () => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData,
    )
      .then((res) => {
        const imageName = res.data.url;

        setPhoto(imageName);
        console.log(imageName);
        // console.log(res);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        // Handle the error, e.g., show a toast or alert
      });
  };

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const navigate = useNavigate();

  const {
    data: users,
    isLoading: loading,
    refetch,
    error,
  } = useGetUsersQuery();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setPhoto(userInfo.photo);
  }, [userInfo.name, userInfo.email, userInfo.photo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        // await uploadFile();
        const res = await updateProfile({
          id: userInfo.id,
          name,
          email,
          password,
          photo,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated", {
          toastId: customId,
        });
      } catch (err) {
        toast.error(err?.data?.message || err.error, {
          toastId: customId,
        });
      }
    }
  };

  return (
    <main className="flex flex-col-reverse  lg:flex-row mb-36 lg:mb-0">
      <div className="flex-1 p-4 lg:p-12 mb-auto max-w-96">
        <section aria-labelledby="profile">
          <header className="flex justify-between">
            <h2 className="sr-only" id="profile">
              Profile
            </h2>

            <h2 className="text-xl lg:text-2xl pb-4">Profile</h2>
          </header>
          <form method="PUT" onSubmit={submitHandler} className="bg-white mb-5">
            <div className="py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="imgupload" className="sr-only" id="profile">
                    Photo
                  </label>

                  <div className="flex items-center gap-x-3">
                    {photo ? (
                      <Image
                        style={{ width: 70, borderRadius: 50 }}
                        cloudName={cloud_name}
                        publicId={photo}
                      />
                    ) : (
                      <UserCircleIcon
                        className="h-8 w-8 lg:h-12 lg:w-12 text-gray-300"
                        aria-hidden="true"
                      />
                    )}

                    <label className="custom-file-upload">Attach file</label>
                  </div>
                  {/* <button
                    type="button"
                    id="imgupload"
                    onClick={uploadFile}
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-5"
                  >
                    Change
                  </button> */}
                  <input
                    type="file"
                    id="imgupload"
                    className="mt-5"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-slate-500"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-500"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="bg-gray-50 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-x-6 py-4 px-8">
              {isLoading && <Loader />}
              <button
                type="submit"
                className="rounded-md border border-orange-500 px-3 py-2 text-sm text-orange-500 shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Update profile
              </button>
            </div>
          </form>

          <header className="flex justify-between">
            <h2 className="sr-only" id="security">
              Security
            </h2>

            <h2 className="text-xl lg:text-2xl pb-4">Security</h2>
          </header>
          <form method="PUT" onSubmit={submitHandler} className="bg-white">
            <div className="py-4 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-slate-500"
                  >
                    New password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-slate-500"
                  >
                    Confirm password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-50  block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 py-4 px-8">
              {isLoading && <Loader />}

              <button
                type="submit"
                className="rounded-md border border-orange-500 px-3 py-2 text-sm text-orange-500 hover:text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Update password
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="flex-1 px-4  lg:px-14 pt-4  lg:pt-10 border-l border-gray-200">
        <section className="hidden lg:block">
          <header className="flex justify-between">
            <h2 className="sr-only" id="account">
              Account details
            </h2>

            <h2 id="account" className="text-xl lg:text-2xl pb-4">
              Account details
            </h2>
          </header>
          <section aria-labelledby="projects">
            <div className="max-w-[90%]">
              <p className="text-sm pb-5 text-neutral-500"></p>
              <ul>
                <li className="grid grid-cols-2 py-2">
                  <p className="text-sm text-neutral-500">ID</p>
                  <p className="text-sm text-neutral-800">U-123</p>
                </li>
                <li className="grid grid-cols-2 py-2">
                  <p className="text-sm text-neutral-500">Status</p>
                  <p className="text-sm font-medium text-neutral-800">active</p>
                </li>
                <li className="grid grid-cols-2 py-2">
                  <p className="text-sm text-neutral-500">Role</p>
                  <p className="text-sm font-medium text-neutral-800">
                    Manager
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ProfileDetails;
