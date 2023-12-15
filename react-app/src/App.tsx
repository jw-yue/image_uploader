import { useState, useEffect } from "react";
import { ImageContext } from "./context.ts";
import UploadImage from "./components/uploadImage.tsx";
import Search from "./components/forms/search.tsx";
import ImagesList from "./components/imagesList.tsx";
import { Image } from "./types.ts";
import { fetchImages } from "./userActions.ts";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [imagesList, setImagesList] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages()
      .then((res) => {
        setImagesList(res);
      })
      .catch(() => {
        toast("Failed to fetch images");
      });
  }, []);

  return (
    <>
      <Toaster />
      <ImageContext.Provider value={imagesList}>
        <div className="w-100 vh-100 p-3">
          <div className="d-flex justify-content-between flex-wrap">
            <Search
              setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
            />
            <UploadImage
              setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
            />
          </div>
          <ImagesList
            setImagesList={(imagesList: Image[]) => setImagesList(imagesList)}
          />
        </div>
      </ImageContext.Provider>
    </>
  );
}

export default App;
