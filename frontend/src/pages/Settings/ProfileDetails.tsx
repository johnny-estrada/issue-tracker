import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUsersQuery,
} from "../../services/state/redux/slices/usersApiSlice";
import { setCredentials } from "../../services/state/redux/slices/authSlice";
import Loader from "../../components/ui/Loader";
import Details from "./Details";
import Profile from "./Profile";
import Security from "./Security";

const ProfileDetails = () => {
  const [file, setFile] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        // Handle the error, e.g., show a toast or alert
      });
  };

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
        <Profile
          submitHandler={submitHandler}
          photo={photo}
          cloudName={cloud_name}
          uploadFile={uploadFile}
          name={name}
          email={email}
          setFile={setFile}
          setName={setName}
          setEmail={setEmail}
        />

        <Security
          submitHandler={submitHandler}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </div>
      <Details userInfo={userInfo} />
    </main>
  );
};

export default ProfileDetails;
