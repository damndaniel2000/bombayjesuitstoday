const express = require("express");
const MongoClient = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const videoSpiritualRouter = require("./routes/Videos/videoSpiritualRouter");
const videoMissionRouter = require("./routes/Videos/videoMissionRouter");
const videoLaityRouter = require("./routes/Videos/videoLaityRouter");
const videoGospelRouter = require("./routes/Videos/videoGospelRouter");
const videoYouthRouter = require("./routes/Videos/videoYouthRouter");
const videoFollowRouter = require("./routes/Videos/videoFollowRouter");
const videoUploadRouter = require("./routes/Videos/videoUploadRouter");

const contributorJesuitRouter = require("./routes/Contributors/contributorsJesuitsRouter");
const contributorLaityRouter = require("./routes/Contributors/contributorsLaityRouter");
const contributorBlogsRouter = require("./routes/Contributors/contributorsBlogsRouter");

const blogRouter = require("./routes/Blogs/blogRouter");

const userRouter = require("./routes/Misc/userRouter");
const counterRouter = require("./routes/Misc/counterRouter");

uri = "mongodb://localhost:27017/jesuits";
MongoClient.connect(uri, {
  user: "dand",
  pass: process.env.MONGO_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error(err));

app.use("/api/videos-spiritual", videoSpiritualRouter);
app.use("/api/videos-mission", videoMissionRouter);
app.use("/api/videos-laity", videoLaityRouter);
app.use("/api/videos-gospel", videoGospelRouter);
app.use("/api/videos-youth", videoYouthRouter);
app.use("/api/videos-follow", videoFollowRouter);
app.use("/api/videos-upload", videoUploadRouter);

app.use("/api/contributors-jesuits", contributorJesuitRouter);
app.use("/api/contributors-laity", contributorLaityRouter);
app.use("/api/contributors-blogs", contributorBlogsRouter);

app.use("/api/blogs", blogRouter);

app.use("/api/users", userRouter);
app.use("/api/counter", counterRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
