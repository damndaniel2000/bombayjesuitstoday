const express = require("express");
const MongoClient = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const videoSpiritualRouter = require("./routes/videoSpiritualRouter");
const videoMissionRouter = require("./routes/videoMissionRouter");
const videoLaityRouter = require("./routes/videoLaityRouter");
const videoGospelRouter = require("./routes/videoGospelRouter");
const videoUploadRouter = require("./routes/videoUploadRouter");
const contributorRouter = require("./routes/contributorsRouter");
const userRouter = require("./routes/userRouter");

let uri = "";
if (process.env.ENVIRONMENT === "production") {
  uri = process.env.MONGODB_URI;
} else {
  uri = "mongodb://localhost:27017/jesuits";
}

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error(err));

app.use("/api/videos-spiritual", videoSpiritualRouter);
app.use("/api/videos-mission", videoMissionRouter);
app.use("/api/videos-laity", videoLaityRouter);
app.use("/api/videos-gospel", videoGospelRouter);
app.use("/api/videos-upload", videoUploadRouter);
app.use("/api/contributors", contributorRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
