import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState();

  let { slug } = useParams();
  console.log(slug);
  const baseUrl = `http://localhost:4000`;

  useEffect(() => {
    const url = `${baseUrl}/post/${slug}`;
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
      Post
      <p>
        {post.itemName}
        <br />
        {post.pickupLocation}
        <br />
        {post.description}
        <br />
        {post.price}
        <br />
        {post.userId}
        <br />
      </p>
    </div>
  );
}
