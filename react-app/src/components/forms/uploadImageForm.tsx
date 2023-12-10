import { FormEvent } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const uploadImageForm = ({
  handleSubmit,
  setShowForm,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setShowForm: (val: boolean) => void;
}) => {
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
