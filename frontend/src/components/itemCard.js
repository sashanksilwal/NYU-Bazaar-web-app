import React from "react";
import PropTypes from "prop-types";

function itemCard({ User }) {
  return (
    <div>
      <h3>{User.itemName} </h3>
      <p>
        <a href={`/post/${User.id}`}>View Post</a>
      </p>
    </div>
  );
}

itemCard.propTypes = {
  User: PropTypes.object,
};

export default itemCard;
