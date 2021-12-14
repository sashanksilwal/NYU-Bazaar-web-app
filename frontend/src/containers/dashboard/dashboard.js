import React, { useEffect, useState } from "react";
// import ItemCard from "../../components/itemCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const url = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/";

function Dashboard() {
  const [userPosts, setUserPosts] = useState([]);
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
  if (!userPosts) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginTop: "50vh",
        }}
      >
        <CircularProgress size={80} />
      </Box>
    );
  }

  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      <div className="Full">
        <ImageList>
          {userPosts.map((e, i) => (
            <ImageListItem sx={{ width: 500, height: 450 }} key={i} cols={0.2}>
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

export default Dashboard;
