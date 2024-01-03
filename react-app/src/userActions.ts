const DOMAIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://image-uploader-frontend-five.vercel.app/";

export const fetchImages = async () => {
  const response = await fetch(DOMAIN_URL + "api/image-uploader", {
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
    DOMAIN_URL + "api/image-uploader/search/" + str,
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
export const uploadImage = async (imgDetails: FormData) => {
  const response = await fetch(DOMAIN_URL + "api/image-uploader/add", {
    method: "POST",
    body: imgDetails,
  });
  const data = await response.json();

  return data;
};

export const editImage = async (imgDetails: FormData) => {
  const response = await fetch(DOMAIN_URL + "api/image-uploader/edit", {
    method: "POST",
    body: imgDetails,
  });
  const data = await response.json();

  return data;
};

export const deleteImage = async (id: number) => {
  const response = await fetch(DOMAIN_URL + "api/image-uploader/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};
