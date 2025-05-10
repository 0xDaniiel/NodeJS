import express from "express";
import multer from "multer"; // File upload middleware

const app = express();
const port = 3000;

// Set up multer to store uploaded files in 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Endpoint to handle single file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
