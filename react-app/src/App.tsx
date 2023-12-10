import { useState, useEffect } from "react";
import UploadImage from "./components/uploadImage.tsx";
import Search from "./components/forms/search.tsx";
import DisplayImagesList from "./components/imagesList.tsx";
import { Image } from "./types.ts";
import { fetchImages } from "./userActions.ts";

function App() {
  const [imagesList, setImagesList] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages().then((res) => {
      setImagesList(res);
    });
  }, []);

  return (
    <>
      <div className="vw-100 p-3">
        <div className="d-flex justify-content-between flex-wrap">
          <Search
            setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
          />
          <UploadImage
            setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
          />
        </div>
        <DisplayImagesList
          imagesList={imagesList}
          setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
        />
      </div>
    </>
  );
}

export default App;
