import { FormEvent, useState } from "react";
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

  const deleteImg = (id: string) => {
    deleteImage(id).then((res) => {
      setImagesList(res);
    });
  };

  const editImg = (id: string, e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imgDetails: ImageType = {
      id: id,
      name: (e.currentTarget[0] as HTMLInputElement).value,
      url: (e.currentTarget[1] as HTMLInputElement).value,
    };

    editImage(imgDetails).then((res) => {
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
          handleSubmit={(e) => editImg(image.id, e)}
          setShowForm={(bool) => setDisplayEditForm(bool)}
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
