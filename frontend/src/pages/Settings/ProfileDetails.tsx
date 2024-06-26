import { useState, useEffect, SyntheticEvent } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../../state/redux/slices/usersApiSlice";
import { setCredentials } from "../../state/redux/slices/authSlice";
import Details from "./Details";
import Profile from "./Profile";
import Security from "./Security";

const ProfileDetails = () => {
  const [file, setFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [updateProfile] = useUpdateUserMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch();

  const customId = "custom-id-yes";

  if (!toast.isActive(customId)) {
    toast({
      toastId: customId,
    });
  }

  const preset_key = "t9ew2cj4";
  const cloud_name = "dm1cbmiwq";

  const uploadFile = () => {
    const formData = new FormData();

    formData.append("file", file!);
    formData.append("upload_preset", preset_key);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData,
    )
      .then((res) => {
        let imageName = res.data.url;

        if (imageName.startsWith("http://")) {
          imageName = imageName.replace("http://", "https://");
        }

        setPhoto(imageName);
        console.log(imageName);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setPhoto(userInfo.photo);
  }, [userInfo.name, userInfo.email, userInfo.photo]);

  const submitHandler = async (e: SyntheticEvent) => {
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
        toast.error(`${err}`, {
          toastId: customId,
        });
      }
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row bg-white lg:h-screen pb-20 lg:pb-0">
      <div className="flex-1 px-6 pt-4 lg:pt-12 lg:px-12 mb-auto">
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
    </div>
  );
};

export default ProfileDetails;
