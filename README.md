# Image Uploader App

## Description

This is a fullstack CRUD image uploader application that allows users to manage a list of images. The application is built using React for the frontend and a server (using Node.js and TypeScript) for handling image CRUD operations. Users can search for images by name, add new images, edit existing images, and delete images.

Please note that although users can upload images, the app currently does not display them on the UI. This feature is planned for a future update.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/image-uploader.git
   ```

2. Navigate to the `image_uploader` folder:

   ```bash
   cd image_uploader
   ```

3. Run the following command to install dependencies for both the server and the React app:

   ```bash
   npm install
   ```

## App Start

To start the application, run the following command in the `image_uploader` folder:

```bash
npm run dev
```

This command starts both the React app and the server concurrently.

Optionally, you can start individual components:

- To start only the frontend (React app), navigate to the `react-app` folder and run:

  ```bash
  npm start
  ```

- To start only the server, run the following command in the `image_uploader` folder:

  ```bash
  nodemon index.ts
  ```

## Usage

The Image Uploader app provides the following functionalities:

- Search for an image by name
- Add a new image
- Edit an existing image
- Delete an image

Users can upload images, and they will be saved to the `uploaded_images` folder included in this app. However, please note that the uploaded images are not currently displayed on the UI. This feature is planned for a future update.

Thanks for viewing my project! If you have any questions or feedback, feel free to reach out.
