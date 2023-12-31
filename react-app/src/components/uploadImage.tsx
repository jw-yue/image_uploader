import { useState } from "react";
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

  const sendForm = (form: FormData) => {
    uploadImage(form).then((res) => {
      setImagesList(res);
    });

    setShowForm(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        size="small"
        className="btn btn-default h-50"
        onClick={() => setShowForm(true)}
      >
        Add Image
      </Button>
      <UploadImageForm
        sendForm={(form) => sendForm(form)}
        showForm={showForm}
        onClose={() => setShowForm(false)}
      />
    </>
  );
};

export default UploadImage;
