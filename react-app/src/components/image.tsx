import { useState } from "react";
import UploadImageForm from "./forms/uploadImageForm.tsx";
import { editImage, deleteImage } from "../userActions.ts";
import { Image as ImageType } from "../types.ts";
import { Button } from "@mui/material";
import Loader from "./common/loader.tsx";
import toast from "react-hot-toast";

const Image = ({
  image,
  setImagesList,
}: {
  image: ImageType;
  setImagesList: (imgList: ImageType[]) => void;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState("");

  const onDeleteImg = (id: number) => {
    setButton("delete");
    setLoading(true);

    deleteImage(id)
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to delete image");
      })
      .finally(() => setLoading(false));
  };

  const onSendForm = (form: FormData) => {
    setShowForm(false);
    setButton("edit");
    setLoading(true);

    editImage(form)
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to edit image");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="p-3">
        <div className="d-flex flex-column align-items-center">
          <h6 className="text-center mb-3">{image.name}</h6>
          <img
            src={`${image.url}`}
            alt={`${image.name}`}
            className="image-size"
          ></img>
        </div>

        <hr></hr>

        <div className="d-flex justify-content-between mt-1">
          <Button
            type="button"
            variant="text"
            size="small"
            onClick={() => {
              setShowForm(true);
            }}
            disabled={loading}
            className="btn btn-default m-1"
          >
            {loading && button === "edit" ? <Loader /> : "Edit Image"}
          </Button>
          <Button
            type="button"
            variant="text"
            size="small"
            onClick={() => onDeleteImg(image.id)}
            disabled={loading}
            className="btn btn-default m-1"
          >
            {loading && button === "delete" ? <Loader /> : "Delete Image"}
          </Button>
        </div>
        <UploadImageForm
          sendForm={(form) => onSendForm(form)}
          showForm={showForm}
          onClose={() => setShowForm(false)}
          imageId={image.id}
        />
      </div>
    </>
  );
};

export default Image;
