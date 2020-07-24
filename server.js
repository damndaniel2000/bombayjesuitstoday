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
const userRouter = require("./routes/userRouter");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.error(err));

app.use("/api/videos-post", videoPostRouter);
app.use("/api/videos-upload", videoUploadRouter);
app.use("/api/contributors", contributorRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
