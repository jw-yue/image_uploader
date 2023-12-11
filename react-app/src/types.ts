export interface Image {
  id: number;
  name: string;
  url: string;
}

export interface UploadImage {
  id?: number;
  name: string;
  url: string;
  uploadFile: FormData;
}
