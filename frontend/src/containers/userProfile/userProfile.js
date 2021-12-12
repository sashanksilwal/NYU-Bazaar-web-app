import React from "react";
import PropTypes from "prop-types";

// import Cool from "../../components/coolstuff";
function UserProfile({ userInformation }) {
  console.log(userInformation);
  return (
    <div className="PageWrapper">
      <h1>User: {userInformation.email}</h1>
    </div>
  );
}

export default UserProfile;
UserProfile.propTypes = {
  userInformation: PropTypes.object.isRequired,
};
