import Axios from "axios";
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUsersQuery,
} from "../services/state/redux/slices/usersApiSlice";
import { setCredentials } from "../services/state/redux/slices/authSlice";
import Loader from "../components/ui/Loader";
import { Tab } from "@headlessui/react";
import Header from "../components/header/Header";
import HeaderTitle from "../components/header/HeaderTitle";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Users from "./admin/components/Users";
import ProfileDetails from "./ProfileDetails";
import Sidebar from "../components/sidebar/Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Settings() {
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

  const title = "Settings";

  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-1 lg:flex flex-col lg:h-screen lg:ml-[288px]">
        <Header>
          <HeaderTitle title={title} />
          <></>
        </Header>

        <Tab.Group>
          <Tab.List className="flex rounded-xl bg-gray-100 pb-4 lg:pb-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  "ml-4 lg:ml-12 text-sm leading-5 relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-stone-800  hover:bg-gray-50 focus:z-10 shadow-sm",
                  selected
                    ? "bg-stone-800 text-white pointer-events-none"
                    : "text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 text-sm",
                )
              }
            >
              profile
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "text-sm leading-5 relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-900 hover:bg-gray-50 focus:z-10 shadow-sm",
                  selected
                    ? "bg-stone-800 text-white pointer-events-none"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 text-sm",
                )
              }
            >
              users
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel
              className={classNames(
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <ProfileDetails />
            </Tab.Panel>

            <Tab.Panel
              className={classNames(
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <section
                aria-labelledby="projects"
                className="flex-1 p-10 mb-auto"
              >
                <Users users={users} />
              </section>
            </Tab.Panel>
          </Tab.Panels>
          <></>
        </Tab.Group>
      </div>
    </>
  );
}

export default Settings;
