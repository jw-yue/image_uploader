import { useState, FormEvent, ChangeEvent } from "react";
import { fetchSearchResults } from "../../userActions.ts";
import { Image } from "../../types.ts";
import { Button, Input } from "@mui/material";
import Loader from "../util/loader.tsx";
import toast from "react-hot-toast";

const Search = ({
  setImagesList,
}: {
  setImagesList: (imagesList: Image[]) => void;
}) => {
  const [searchStr, setSearchStr] = useState<string>("");
  const [lastServerCallTimestamp, setLastServerCallTimestamp] =
    useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const str = (e.target as HTMLInputElement).value;
    setSearchStr(str);
    const elapsedTime = Date.now() - lastServerCallTimestamp;

    if (elapsedTime > 1000) {
      setLoading(true);
      setLastServerCallTimestamp(Date.now());

      fetchSearchResults(str)
        .then((res) => {
          setLoading(false);
          setImagesList(res);
        })
        .catch(() => {
          toast("Failed to search images");
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
            value={searchStr}
            onChange={(e) =>
              onChangeHandler(e as ChangeEvent<HTMLInputElement>)
            }
            aria-describedby="Search an image by title"
          />

          <Button
            type="submit"
            variant="outlined"
            size="small"
            disabled={loading}
            className="btn btn-default ml-3 h-50"
            onClick={() => setSearchStr("")}
          >
            {loading ? <Loader /> : "Enter"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Search;
