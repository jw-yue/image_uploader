import { useState } from "react";
import { uploadImage } from "../userActions.ts";
import { Image } from "../types.ts";
import Button from "@mui/material/Button";
import UploadImageForm from "./forms/uploadImageForm.tsx";
import Loader from "./common/loader.tsx";
import toast from "react-hot-toast";

const UploadImage = ({
  setImagesList,
}: {
  setImagesList: (imagesList: Image[]) => void;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const sendForm = (form: FormData) => {
    setLoading(true);
    setShowForm(false);

    uploadImage(form)
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to add image");
      })
      .finally(() => setLoading(false));
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
        {loading ? <Loader /> : "Add Image"}
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
