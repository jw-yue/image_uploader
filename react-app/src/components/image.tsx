import { useState } from "react";
import UploadImageForm from "./forms/uploadImageForm.tsx";
import { editImage, deleteImage } from "../userActions.ts";
import { Image as ImageType } from "../types.ts";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Image = ({
  image,
  setImagesList,
}: {
  image: ImageType;
  setImagesList: (imgList: ImageType[]) => void;
}) => {
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const deleteImg = (id: number) => {
    deleteImage(id).then((res) => {
      setImagesList(res);
    });
  };

  const sendForm = (form: FormData) => {
    editImage(form).then((res) => {
      setImagesList(res);
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
      {displayEditForm === true ? (
        <UploadImageForm
          sendForm={(form) => sendForm(form)}
          setShowForm={(bool) => setDisplayEditForm(bool)}
          imageId={image.id}
        />
      ) : (
        <ButtonGroup
          color="secondary"
          size="small"
          aria-label="small button group"
        >
          <Button
            type="button"
            variant="outlined"
            size="small"
            onClick={() => {
              setDisplayEditForm(true);
            }}
          >
            Edit Image
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="small"
            onClick={() => deleteImg(image.id)}
          >
            Delete Image
          </Button>
        </ButtonGroup>
      )}
    </>
  );
};

export default Image;
