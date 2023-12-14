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
    <>
      <div className="d-flex flex-column align-items-center">
        <h6 className="text-center">{image.name}</h6>
        <img
          src={`${image.url}`}
          alt={`${image.name}`}
          width="500"
          className="image-size p-2"
        ></img>
      </div>

      <div className="d-flex flex-column flex-md-row">
        <Button
          type="button"
          variant="outlined"
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
          variant="outlined"
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
    </>
  );
};

export default Image;
