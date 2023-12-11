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
          sendForm={(form) => sendForm(form)}
          setShowForm={(bool) => setShowForm(bool)}
        />
      </>
    );
  }
};

export default UploadImage;
