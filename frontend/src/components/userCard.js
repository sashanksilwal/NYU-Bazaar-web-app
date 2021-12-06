import React from "react";
import PropTypes from "prop-types";

function UserCard({ User }) {
  return (
    <div className="PageWrapper">
      <h3>{User.name} </h3>
    </div>
  );
}

UserCard.propTypes = {
  User: PropTypes,
};

export default UserCard;
