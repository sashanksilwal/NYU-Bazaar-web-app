const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAmNfmot7JAWfRj8fETJrWGS2UnL0f-E3U",
  authDomain: "final-project-ac590.firebaseapp.com",
  projectId: "final-project-ac590",
  storageBucket: "final-project-ac590.appspot.com",
  messagingSenderId: "997232705866",
  appId: "1:997232705866:web:37e6d2f362e241f20141b3",
};

firebase.initializeApp(firebaseConfig);

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const indexRoute = require("./routes/index");
const createUserPostRoute = require("./routes/createPost");
const singlePost = require("./routes/getPost");

app.use("/", indexRoute);
app.use("/create", createUserPostRoute);
app.use("/post", singlePost);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
