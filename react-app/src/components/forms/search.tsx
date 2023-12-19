import { useState, FormEvent, ChangeEvent } from "react";
import { fetchSearchResults } from "../../userActions.ts";
import { Image } from "../../types.ts";
import { Button, Input } from "@mui/material";

const Search = ({
  setImagesList,
}: {
  setImagesList: (imagesList: Image[]) => void;
}) => {
  const [lastServerCallTimestamp, setLastServerCallTimestamp] =
    useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const str = (e.target as HTMLInputElement).value;
    const elapsedTime = Date.now() - lastServerCallTimestamp;

    if (elapsedTime > 1000) {
      setLastServerCallTimestamp(Date.now());

      fetchSearchResults(str).then((res) => {
        setImagesList(res);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="d-flex">
          <Input
            id="str"
            type="text"
            placeholder="Search Images..."
            onChange={(e) =>
              onChangeHandler(e as ChangeEvent<HTMLInputElement>)
            }
            aria-describedby="Search an image by title"
          />

          <Button
            type="submit"
            variant="outlined"
            size="small"
            className="btn btn-default ml-3 h-50"
          >
            Enter
          </Button>
        </div>
      </form>
    </>
  );
};

export default Search;
