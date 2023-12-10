import { Image } from "./types";

export const fetchImages = async () => {
  const response = await fetch("http://localhost:3000/api/image-uploader", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};

export const fetchSearchResults = async (str: string) => {
  const response = await fetch(
    "http://localhost:3000/api/image-uploader/search/" + str,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return data;
};
export const uploadImage = async (imgDetails: Image) => {
  const response = await fetch("http://localhost:3000/api/image-uploader/add", {
    method: "POST",
    body: JSON.stringify(imgDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};

export const editImage = async (imgDetails: Image) => {
  const response = await fetch(
    "http://localhost:3000/api/image-uploader/edit",
    {
      method: "POST",
      body: JSON.stringify(imgDetails),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return data;
};

export const deleteImage = async (id: string) => {
  const response = await fetch(
    "http://localhost:3000/api/image-uploader/" + id,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return data;
};
