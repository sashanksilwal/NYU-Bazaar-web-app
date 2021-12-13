import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState();

  let { slug } = useParams();
  console.log(slug);
  const baseUrl = process.env.REACT_APP_ENDPOINT || "http://localhost:4000/";

  useEffect(() => {
    const url = `${baseUrl}post/${slug}`;
    axios
      .get(url)
      .then(function (response) {
        setPost(response.data);
        console.log(post);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [slug]);

  if (!post) return null;
  return (
    <div className="PageWrapper">
      <p>
        <br />
        <strong>Item: </strong>
        {post.itemName}
        <br />
        <strong>Pickup Location: </strong>
        {post.pickupLocation}
        <br />
        <strong>Description: </strong>
        {post.description}
        <br />
        <strong>Price: </strong>${post.price}
        <br />
        <br />
        <img src={post.imageSrc} />
      </p>
    </div>
  );
}
