import React, { useEffect, useState } from "react";
import ItemCard from "../../components/itemCard";
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
        {userPosts.map((e, i) => (
          <ItemCard User={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
