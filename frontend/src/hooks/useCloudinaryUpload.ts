import { useState } from "react";
import Axios from "axios";

const useCloudinaryUpload = (presetKey, cloudName) => {
  const [photo, setPhoto] = useState("");

  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", presetKey);

      const response = await Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
      );

      const imageName = response.data.url;
      setPhoto(imageName);
      console.log(imageName);
      // You can return or handle the photo URL as needed
      return imageName;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle the error, e.g., show a toast or alert
      throw error;
    }
  };

  return { photo, uploadFile };
};

export default useCloudinaryUpload;
