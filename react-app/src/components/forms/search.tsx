import { FormEvent, ChangeEvent } from "react";
import { fetchSearchResults } from "../../userActions.ts";
import { Image } from "../../types.ts";
import Button from "@mui/material/Button";

const Search = ({
  setImagesList,
}: {
  setImagesList: (imagesList: Image[]) => void;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    fetchSearchResults((e.target as HTMLInputElement).value).then((res) => {
      setImagesList(res);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="d-flex">
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="Search Images..."
              onChange={(e) => onChangeHandler(e)}
              className="form-control form-control-sm"
            ></input>
          </div>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            className="ml-2 h-50"
          >
            Enter
          </Button>
        </div>
      </form>
    </>
  );
};

export default Search;
