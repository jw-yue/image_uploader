import { FormEvent } from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  Input,
} from "@mui/material";

const uploadImageForm = ({
  sendForm,
  showForm,
  onClose,
  imageId,
}: {
  sendForm: (form: FormData) => void;
  showForm: boolean;
  onClose: () => void;
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
      form.append("cat-image", file, name);
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
      <Dialog onClose={onClose} open={showForm}>
        <div className="p-2">
          <div className="d-flex justify-content-between">
            <DialogTitle className="text-center">Upload an Image</DialogTitle>
            <Button
              type="button"
              variant="text"
              onClick={() => {
                onClose();
              }}
              className="btn btn-default"
            >
              X
            </Button>
          </div>
          <DialogContent>
            <DialogContentText className="mb-2">
              Type in a URL or upload an image
            </DialogContentText>

            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <Input
                id="name"
                type="text"
                placeholder="My Best Friend!"
                required
                aria-describedby="image name"
                className="mt-2 mb-2"
              />
              <Input
                id="url"
                type="url"
                placeholder="https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
                aria-describedby="image url"
                required
                className="mt-2 mb-2"
              />
              <Button variant="text" className="mt-2">
                <input type="file" name="uploadedImage" accept="image/*" />
              </Button>

              <Button
                type="submit"
                variant="outlined"
                className="btn btn-default mt-4"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default uploadImageForm;
