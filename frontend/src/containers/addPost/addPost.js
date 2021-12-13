import React from "react";
import AddPostForm from "../../components/addPostForm";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
function AddPost({ userInformation }) {
  let navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/";

  function submitPost(e) {
    e.preventDefault();
    const itemName = e.currentTarget.name.value;
    const description = e.currentTarget.description.value;
    const price = e.currentTarget.price.value;
    const pickupLocation = e.currentTarget.location.value;

    const userName = userInformation.displayName;
    const userId = userInformation.uid;

    const url = `${baseUrl}create?itemName=${itemName}&description=${description}&price=${price}&pickupLocation=${pickupLocation}&userName=${userName}&userId=${userId}`;
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        navigate("/home", { replace: true });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div className="PageWrapper">
      <AddPostForm submitPost={submitPost}></AddPostForm>
    </div>
  );
}

AddPost.propTypes = {
  userInformation: PropTypes.object,
};
export default AddPost;
