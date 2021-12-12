const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const post = firestore.getDoc(firestore.doc(db, "userPosts", postId));

  post
    .then((response) => {
      const post = response.data();
      if (post) return res.status(200).send(post);
      return res.status(404).json({ err: "Please enter a valid ID" });
    })
    .catch((error) => {
      res.status(300).json({ "No doc sorry": error });
    });
});

router.get("/", (req, res) => {
  res.status(404).json({ err: "Please include an ID" });
});

module.exports = router;
