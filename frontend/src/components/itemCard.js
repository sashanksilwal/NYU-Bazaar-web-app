import React from "react";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
function itemCard({ User }) {
  console.log(User);
  return (
    <div>
      <ImageList>
        <ImageListItem key={User.img}>
          <img
            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=248&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={User.itemName}
            loading="lazy"
          />
          <ImageListItemBar
            title={User.itemName}
            subtitle={<span>Price: {User.price}</span>}
            position="below"
          />
        </ImageListItem>

        <p>
          <a href={`/post/${User.id}`}>View Post</a>
        </p>
      </ImageList>
    </div>
  );
}

itemCard.propTypes = {
  User: PropTypes.object,
};

export default itemCard;
