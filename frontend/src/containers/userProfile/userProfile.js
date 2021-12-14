import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const url = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/";
function UserProfile({ userInformation }) {
  const [userPosts, setUserPosts] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setUserPosts(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);
  let filtered;
  if (userPosts) {
    filtered = userPosts.filter((post) => userInformation.uid === post.userId);
  }

  return (
    <div className="PageWrapper">
      <h1>Name: {userInformation.displayName}</h1>
      <h1>User Email: {userInformation.email}</h1>
      <div className="Full">
        {filtered && (
          <span>Nothing posted by you, so nothing to display here</span>
        )}
        <ImageList>
          {filtered &&
            filtered.map((e, i) => (
              <ImageListItem
                sx={{ width: 500, height: 450 }}
                key={i}
                cols={0.2}
              >
                <img src={e.imageSrc} alt={e.itemName} loading="lazy" />
                <ImageListItemBar
                  className="Title"
                  title={e.itemName}
                  subtitle={
                    <span className="Text">
                      Price: {e.price} <br />
                      <a className="TextLink" href={`/post/${e.id}`}>
                        View Post
                      </a>
                    </span>
                  }
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
    </div>
  );
}

export default UserProfile;
UserProfile.propTypes = {
  userInformation: PropTypes.object.isRequired,
};
