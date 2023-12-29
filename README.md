# Image Uploader App
NOTE: This app is for demonstration purposes only.

## Description

This is a fullstack CRUD image uploader application that allows users to manage a list of images. The application is built using React for the frontend and Express for handling image CRUD operations. Users can search for images by name, add new images, edit existing images, and delete images.

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


- To start only the frontend (React app), navigate to the `react-app` folder and run:

  ```bash
  npm start
  ```

- To start only the server, run the following command in the `server` folder:

  ```bash
  nodemon index.ts
  ```

## Usage

The Image Uploader app provides the following functionalities:

- Search for an image by name
- Add a new image
- Edit an existing image
- Delete an image

To expand on the adding images functionality, users can either add an image URL or upload an image from a local folder. Uploaded images are saved to a local folder on the user's computer.


## Technology Stack

This project is built using the following technologies:

- **Frontend:**
  - React.js (create-react-app) 
  - TypeScript
  - JavaScript (ES6)
  - HTML5
  - CSS3

- **Backend:**
  - Node.js
  - Express

- **Additional Tools and Libraries:**
  - Multer (for image uploading)
  - Bootstrap
  - MaterialUI   

  
Thanks for viewing my project! If you have any questions or feedback, feel free to reach out.
