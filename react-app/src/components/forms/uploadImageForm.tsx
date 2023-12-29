import { useState, FormEvent } from "react";
import {
  Button,
  ButtonGroup,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  Input,
} from "@mui/material";

const UploadImageForm = ({
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
  const [imgType, setImgType] = useState<string>("");

  const imageContent = () => {
    if (imgType === "url") {
      return (
        <Input
          id="url"
          type="url"
          placeholder="https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
          aria-describedby="image url"
          required
          className="mt-2 mb-2"
        />
      );
    } else {
      return (
        <Button variant="text" className="mt-2">
          <input type="file" name="uploadedImage" accept="image/*" />
        </Button>
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setImgType("");

    const idStr = imageId?.toString() ?? "";
    const name = (e.currentTarget[0] as HTMLInputElement)?.value ?? "";
    const url = (e.currentTarget[1] as HTMLInputElement)?.value ?? "";
    const file =
      (e.currentTarget[2] as HTMLInputElement)?.files?.[0] ?? undefined;

    const form = new FormData();

    if (imgType === "url") form.append("imgType", "url");
    if (imgType === "file") form.append("imgType", "file");

    if (imageId) form.append("id", idStr);
    if (name) form.append("name", name);
    if (imgType === "url" && url) form.append("url", url);
    if (imgType === "file" && typeof file !== "undefined")
      form.append("cat-image", file, name);

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
              Choose to submit a URL or upload an image
            </DialogContentText>
            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <Input
                  id="name"
                  type="text"
                  placeholder="Image Name"
                  required
                  aria-describedby="image name"
                  className="mt-2 mb-2"
                />
                <div className="d-flex justify-content-center">
                  {imgType === "" ? (
                    <ButtonGroup className="flex-wrap">
                      <Button
                        type="button"
                        variant="text"
                        className="btn btn-default mt-2"
                        onClick={() => setImgType("url")}
                      >
                        Image Url
                      </Button>
                      <Button
                        type="button"
                        variant="text"
                        className="btn btn-default mt-2"
                        onClick={() => setImgType("file")}
                      >
                        File
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <div className="flex-wrap">
                      {imageContent()}
                      <Button
                        type="button"
                        variant="text"
                        className="btn btn-default mt-2"
                        onClick={() => setImgType("")}
                      >
                        Back
                      </Button>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="outlined"
                  className="btn btn-default mt-4"
                >
                  Submit
                </Button>
              </form>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default UploadImageForm;
