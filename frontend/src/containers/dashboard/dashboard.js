import React, { useEffect, useState } from "react";
// import ItemCard from "../../components/itemCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import axios from "axios";

const url = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/";

function Dashboard() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setUserPosts(response.data);
        console.log(userPosts);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      <div className="Full">
        <ImageList>
          {userPosts.map((e, i) => (
            <ImageListItem key={i} cols={0.2}>
              <img src={e.imageSrc} alt={e.itemName} loading="lazy" />
              <ImageListItemBar
                title={e.itemName}
                subtitle={
                  <span>
                    Price: {e.price} <br />
                    <a href={`/post/${e.id}`}>View Post</a>
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
