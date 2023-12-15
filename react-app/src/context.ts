import { Image } from "./types.ts";

import { createContext, useContext } from "react";

export const ImageContext = createContext<Image[] | undefined>(undefined);

export function useImageListContext() {
  const imageList = useContext(ImageContext);

  if (imageList === undefined) {
    throw new Error("useImageListContext must be used with an ImageContext");
  }

  return imageList;
}
