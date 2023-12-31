import { useState } from "react";
import UploadImageForm from "./forms/uploadImageForm.tsx";
import { editImage, deleteImage } from "../userActions.ts";
import { Image as ImageType } from "../types.ts";
import Button from "@mui/material/Button";

const Image = ({
  image,
  setImagesList,
}: {
  image: ImageType;
  setImagesList: (imgList: ImageType[]) => void;
}) => {
  const [showForm, setShowForm] = useState(false);

  const deleteImg = (id: number) => {
    deleteImage(id).then((res) => {
      setImagesList(res);
    });
  };

  const sendForm = (form: FormData) => {
    editImage(form).then((res) => {
      setImagesList(res);

      setShowForm(false);
    });
  };

  return (
    <div className="p-3">
      <div className="d-flex flex-column align-items-center">
        <h6 className="text-center mb-3">{image.name}</h6>
        <img
          src={`${image.url}`}
          alt={`${image.name}`}
          className="image-size"
        ></img>
      </div>

      <div className="d-flex justify-content-between mt-1">
        <Button
          type="button"
          variant="text"
          size="small"
          onClick={() => {
            setShowForm(true);
          }}
          className="btn btn-default m-1"
        >
          Edit Image
        </Button>
        <Button
          type="button"
          variant="text"
          size="small"
          onClick={() => deleteImg(image.id)}
          className="btn btn-default m-1"
        >
          Delete Image
        </Button>
      </div>
      <UploadImageForm
        sendForm={(form) => sendForm(form)}
        showForm={showForm}
        onClose={() => setShowForm(false)}
        imageId={image.id}
      />
    </div>
  );
};

export default Image;
