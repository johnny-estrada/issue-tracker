import { useState } from "react";
import Axios from "axios";

interface Props {
  presetKey: string;
  cloudName: string;
}

const useCloudinaryUpload = ({ presetKey, cloudName }: Props) => {
  const [photo, setPhoto] = useState("");

  const uploadFile = async (file: File | null) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file!); // Use the non-null assertion operator
        formData.append("upload_preset", presetKey);

        const response = await Axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
        );

        const imageName = response.data.url;
        setPhoto(imageName);
        return imageName;
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    } else {
      throw new Error("No file provided for upload");
    }
  };

  return { photo, uploadFile };
};

export default useCloudinaryUpload;
