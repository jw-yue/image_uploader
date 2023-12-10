import { FormEvent, useState } from "react";
import { uploadImage } from "../userActions.ts";
import { Image } from "../types.ts";
import Button from "@mui/material/Button";
import UploadImageForm from "./forms/uploadImageForm.tsx";

const UploadImage = ({
  setImagesList,
}: {
  setImagesList: (imagesList: Image[]) => void;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imgDetails: Image = {
      id: "",
      name: (e.currentTarget[0] as HTMLInputElement).value,
      url: (e.currentTarget[1] as HTMLInputElement).value,
    };

    uploadImage(imgDetails).then((res) => {
      setImagesList(res);
    });

    setShowForm(false);
  };

  if (showForm === false) {
    return (
      <Button
        type="button"
        variant="outlined"
        size="small"
        className="h-50"
        onClick={() => setShowForm(true)}
      >
        Add Image
      </Button>
    );
  } else {
    return (
      <>
        <UploadImageForm
          handleSubmit={(e) => handleSubmit(e)}
          setShowForm={(bool) => setShowForm(bool)}
        />
      </>
    );
  }
};

export default UploadImage;
