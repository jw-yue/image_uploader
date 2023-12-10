import { Image as ImageType } from "../types.ts";
import Image from "./image.tsx";

const DisplayImagesList = ({
  imagesList,
  setImagesList,
}: {
  imagesList: ImageType[];
  setImagesList: (imagesList: ImageType[]) => void;
}) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center p-2">
        {imagesList.map((image: ImageType) => {
          return (
            <div
              key={image.id}
              className="d-flex flex-column align-items-center image-item mb-4"
            >
              <Image
                key={image.id}
                image={image}
                setImagesList={setImagesList}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayImagesList;
