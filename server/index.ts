import express from "express";
import multer from "multer";
import cors from "cors";

const imageUploadPath =
  "C:/Users/julie/Projects/image_uploader/uploaded_images";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`);
  },
});

const imageUpload = multer({ storage: storage });

const app = express();
app.use(cors());

app.use(express.json());

let imageList = [
  {
    id: 1,
    name: "Magic Kitty",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
    file: "",
  },
  {
    id: 2,
    name: "Ambitious Kitty",
    url: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
    file: "",
  },
  {
    id: 3,
    name: "2D Kitty",
    url: "https://static.vecteezy.com/system/resources/thumbnails/013/078/569/small/illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cats-to-children-books-or-posters-about-animal-free-png.png",
    file: "",
  },
  {
    id: 4,
    name: "Hello Kitty",
    url: "https://ew.com/thmb/DfO8y_A6pR9NH-87Rye7KwCAveU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hello-kitty-91fab2452d314e90ac07a2933b9c82d0.jpg",
    file: "",
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
  imageUpload.array("my-image-file"),
  (req, res) => {
    if (!req.body.name || !req.body.url) {
      res.status(400).send("Submitted empty fields");
      return;
    }

    const img = {
      id: imageList.length + 1,
      name: req.body.name ?? "John Doe",
      url:
        req.body.url ??
        "https://t4.ftcdn.net/jpg/02/55/18/17/360_F_255181795_23GbUWvT9wjbQgv2iZX2RC1gbU4JF9p7.jpg",
      file: "",
    };

    imageList.push(img);
    res.send(imageList);
  }
);

//POST - edit an image
app.post(
  "/api/image-uploader/edit",
  imageUpload.array("my-image-file"),
  (req, res) => {
    if (!req.body.name || !req.body.url) {
      res.status(400).send("Submitted empty fields");
      return;
    }

    const idOfImgToReplace = Number(req.body.id);

    const newImg = {
      id: idOfImgToReplace,
      name: req.body.name ?? "John Doe",
      url:
        req.body.url ??
        "https://t4.ftcdn.net/jpg/02/55/18/17/360_F_255181795_23GbUWvT9wjbQgv2iZX2RC1gbU4JF9p7.jpg",
      file: "",
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
