JULIE'S README NOTES

UPDATE 12/11/2023

Because I felt regretful about not being able to implement Multer, I worked on this project after the submission deadline and successfully integrated it. However, it's ONLY integrated to the point that photos are uploaded to a file on local computer; there's no configuration to return the uploaded images to client yet.
Other changes:
- implemented proxy on react-app to forward all API requests to port 4000
- refactoring, cleanup


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Time took: 10 hrs

Didn't finish/improvements:
- allowing a user to upload an img from their device (I did img urls). I was reading up on blobs and Multer but didn't time to do more. If I could improve this project, I'd definitely do that first.
- implementing react-router-dom: there were lots of changes since I last used it a year ago, so I decided not to use it since I was already unfamiliar with other things. Structure of this app without routes is definitely not the best.
- loading, error, success states - just didn't have time to implement
- more details to design/layout
- accessibility - barely added any. Would've liked to do more

This is a project made with

frontend

- create-react-app
- React
- JavaScript
- TypeScript
- CSS
- Bootstrap
- MaterialUI
- HTML
- RESTful APIs

backend

- Express (Node.js)
- JavaScript
- RESTful APIs

To run this project, awkwardly have two windows: one cd'ed into the react-app folder, and another cd'ed into the server folder.

For the React application, npm i, then npm start. For the Express app, npm i, then nodemon index.ts. The entire application should be working!

A user can -see full list of images -add an image -edit an image -delete an image -search images by name

Note: backend might be iffy. This is is my first time writing REST APIs.
