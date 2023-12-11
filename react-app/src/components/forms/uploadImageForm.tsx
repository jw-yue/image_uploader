import { FormEvent } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const uploadImageForm = ({
  sendForm,
  setShowForm,
  imageId,
}: {
  sendForm: (form: FormData) => void;
  setShowForm: (val: boolean) => void;
  imageId?: number;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idStr = imageId?.toString() ?? "";
    const name = (e.currentTarget[0] as HTMLInputElement).value;
    const url = (e.currentTarget[1] as HTMLInputElement).value;
    const file = (e.currentTarget[2] as HTMLInputElement).files?.[0];

    const form = new FormData();

    if (typeof file !== "undefined") {
      form.append("my-image-file", file, name);
    }
    if (imageId && imageId !== undefined) {
      form.append("id", idStr);
    }
    form.append("name", name);
    form.append("url", url);

    sendForm(form);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="My Best Friend!"
            className="form-control form-control-sm"
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            type="url"
            id="imgSrc"
            placeholder="https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
            className="form-control form-control-sm"
            required
          ></input>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="uploadedImage"
            accept="image/png, image/gif, image/jpeg"
            className="form-control-file form-control-sm"
          />
        </div>
        <ButtonGroup
          color="secondary"
          size="small"
          aria-label="small button group"
        >
          <Button type="submit" variant="outlined" className="btn btn-sm h-50">
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            className="btn btn-sm h-50"
            onClick={() => {
              setShowForm(false);
            }}
          >
            X
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default uploadImageForm;
