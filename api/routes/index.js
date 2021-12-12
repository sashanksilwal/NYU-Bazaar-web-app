const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const userposts = firestore.getDocs(firestore.collection(db, "userPosts"));
  const userpostsArray = [];
  userposts
    .then((response) => {
      response.forEach((doc) => {
        const docData = doc.data();
        docData.id = doc.id;

        userpostsArray.push(docData);
      });
      return res.send(userpostsArray);
    })
    .catch((error) => {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
