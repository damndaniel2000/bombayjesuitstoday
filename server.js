const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const videoPostRouter = require("./routes/videoPostRouter");
const videoUploadRouter = require("./routes/videoUploadRouter");
const contributorRouter = require("./routes/contributorsRouter");

const url =
  "mongodb+srv://dan:Daniel2000@cluster0-owjks.mongodb.net/Jesuits-Demo?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGODB_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error(err));

app.use("/api/videos-post", videoPostRouter);
app.use("/api/videos-upload", videoUploadRouter);
app.use("/api/contributors", contributorRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
