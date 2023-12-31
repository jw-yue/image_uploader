import express from "express";
import multer from "multer";
import cors from "cors";
import * as path from "path";

const imageUploadPath = "../../image_uploader/uploaded_images";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath);
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    let imagePath = `${file.fieldname}_dateVal_${Date.now()}_${
      file.originalname
    }.${extension}`;

    cb(null, imagePath);
  },
});

const imageUpload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(
  "/uploaded-images",
  express.static(path.join(__dirname, "../uploaded_images"))
);
app.use(express.json());

let imageList = [
  {
    id: 1,
    name: "Magic Kitty",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
  },
  {
    id: 2,
    name: "Ambitious Kitty",
    url: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
  },
  {
    id: 3,
    name: "2D Kitty",
    url: "https://static.vecteezy.com/system/resources/thumbnails/013/078/569/small/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png",
  },
  {
    id: 4,
    name: "Hello Kitty",
    url: "https://ew.com/thmb/DfO8y_A6pR9NH-87Rye7KwCAveU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hello-kitty-91fab2452d314e90ac07a2933b9c82d0.jpg",
  },
  {
    id: 5,
    name: "Besties!",
    url: "http://localhost:3000/uploaded-images/cat-image_dateVal_1704052843114_Besties.jpeg",
  },
  {
    id: 6,
    name: "Peeking Kitty",
    url: "http://localhost:3000/uploaded-images/cat-image_dateVal_1704053255696_Peeking_Kitty.jpeg",
  },
];

// GET - returns a list of images
app.get("/api/image-uploader", (req, res) => {
  res.send(imageList);
});

// GET - returns a list of images filtered by image title
app.get("/api/image-uploader/search/:str?", (req, res) => {
  const str = req.params.str ?? "";

  const tempImageList = imageList.filter((entry) => {
    if (entry.name.toLowerCase().includes(str.toLowerCase())) {
      return true;
    }
  });

  res.send(tempImageList);
});

//POST - add an image
app.post(
  "/api/image-uploader/add",
  imageUpload.single("cat-image"),
  (req, res) => {
    if (!req.body.name || (!req.body.url && !req.file)) {
      res.status(400).send("Received empty fields");
      return;
    }
    const img = {
      id: imageList.length + 1,
      name: (req.body?.name as string) ?? "John Doe",
      url:
        req.body?.imgType === "url"
          ? (req.body?.url as string)
          : "http://localhost:3000/uploaded-images/" + req.file?.filename,
    };

    imageList.push(img);
    res.send(imageList);
  }
);

//POST - edit an image
app.post(
  "/api/image-uploader/edit",
  imageUpload.single("cat-image"),
  (req, res) => {
    if (!req.body.name || (!req.body.url && !req.file)) {
      res.status(400).send("Received empty fields");
      return;
    }

    const idOfImgToReplace: number = Number(req.body.id);

    const newImg = {
      id: idOfImgToReplace,
      name: (req.body.name as string) ?? "John Doe",
      url:
        req.body?.imgType === "url"
          ? (req.body?.url as string)
          : req.body?.imgType === "url"
          ? (req.body?.url as string)
          : "http://localhost:3000/uploaded-images/" + req.file?.filename,
    };

    const index = imageList.findIndex((img) => {
      return img.id === idOfImgToReplace;
    });

    imageList[index] = newImg;
    res.send(imageList);
  }
);

// DELETE - returning a list of images except for deleted image
app.delete("/api/image-uploader/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const newImageList = imageList.filter((entry) => {
    return entry.id !== id;
  });
  imageList = newImageList;
  res.json(imageList);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
