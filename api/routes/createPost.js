const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();
// const form = `
// <h1>Create Form</h1>
// <form action='create/submit'>
// <div style="display:flex; flex-direction:column; max-width:325px">
// <label for "articleTitle"></label>
// <input type='text' name ='articleTitle' placeholder='type article title...'/>
// <label for "articleText"></label>
// <input type='text' name ='articleText' placeholder='type article text...'/>
// <label for "author"></label>
// <input type='text' name ='author' placeholder='type the author name...'/>
// </div>
// <button type="Submit">Submit Article</button>
// </form>`;
// router.get("/", (req, res) => {
//   res.send(form);
// });

router.get("/", (req, res) => {
  const queryParams = req.query;

  const {
    itemName,
    description,
    price,
    pickupLocation,
    userName,
    userId,
    imageSrc,
  } = queryParams;

  const setUserPosts = firestore.addDoc(firestore.collection(db, "userPosts"), {
    itemName,
    description,
    price,
    pickupLocation,
    userName,
    userId,
    imageSrc,
  });

  setUserPosts
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send(err);
    });
});

module.exports = router;
