import { useState, FormEvent, ChangeEvent } from "react";
import { fetchSearchResults } from "../../userActions.ts";
import { Image } from "../../types.ts";
import { Button, Input } from "@mui/material";
import Loader from "../common/loader.tsx";
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
  const [loadingButton, setLoadingButton] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoadingButton("search");
    const str = (e.target as HTMLInputElement).value;
    setSearchStr(str);
    const elapsedTime = Date.now() - lastServerCallTimestamp;

    if (elapsedTime > 500) {
      setLoading(true);
      setLastServerCallTimestamp(Date.now());

      fetchSearchResults(str)
        .then((res) => {
          setImagesList(res);
        })
        .catch(() => {
          toast("Failed to search images");
        })
        .finally(() => {
          setLoading(false);
          setLoadingButton("");
        });
    }
  };

  const onSearch = () => {
    setLoadingButton("search");
    setSearchStr("");
  };

  const onReset = () => {
    setLoading(true);
    setLoadingButton("reset");

    fetchSearchResults("")
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to reset images");
      })
      .finally(() => {
        setSearchStr("");
        setLoading(false);
        setLoadingButton("");
      });
  };

  return (
    <>
      <div className="d-flex">
        <form onSubmit={handleSubmit}>
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
              disabled={loading && loadingButton === "search"}
              className="btn btn-default ml-3 h-50"
              onClick={onSearch}
            >
              {loading && loadingButton === "search" ? <Loader /> : "Enter"}
            </Button>
          </div>
        </form>
        <Button
          type="submit"
          variant="outlined"
          size="small"
          disabled={loading && loadingButton === "reset"}
          className="btn btn-default ml-2 h-50"
          onClick={onReset}
        >
          {loading && loadingButton === "reset" ? <Loader /> : "Reset"}
        </Button>
      </div>
    </>
  );
};

export default Search;
