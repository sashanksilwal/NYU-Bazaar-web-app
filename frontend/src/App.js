import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./containers/login/login";
import CreateUser from "./containers/createUser/createUser";
import Dashboard from "./containers/dashboard/dashboard";
import AddPost from "./containers/addPost/addPost";
import UserProfile from "./containers/userProfile/userProfile";
import Header from "./components/header/header";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import Post from "./containers/Post/post";
import Home from "./containers/homePage/homePage";

const FirebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [loading, setLoading] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  const [errors, setErrors] = useState();

  console.log(loading, "Loading");
  console.log(loggedIn, "Loggedin");
  console.log(appInitialized, "appInitialized");
  useEffect(() => {
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, function (user) {
        if (user) {
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          setUserInformation({});
          setLoggedIn(false);
        }
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      });
  }

  if (loading || !appInitialized || loggedIn == null) {
    return null;
  }

  return (
    <div>
      <Header logout={logout} loggedIn={loggedIn} />
      {errors && <p className="Error">{errors}</p>}
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              !loggedIn ? (
                <Login
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                  setError={setErrors}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/createuser"
            element={
              !loggedIn ? (
                <CreateUser
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                  setError={setErrors}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/user/:id"
            element={
              loggedIn ? (
                <UserProfile userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
                // <Login
                //   setLoggedIn={setLoggedIn}
                //   setUserInformation={setUserInformation}
                //   setError={setErrors}
                // />
              )
            }
          />

          <Route
            path="/addpost"
            element={
              loggedIn ? (
                <AddPost userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
                // <Login
                //   setLoggedIn={setLoggedIn}
                //   setUserInformation={setUserInformation}
                //   setError={setErrors}
                // />
              )
            }
          />
          <Route
            path="/post/:slug"
            element={
              loggedIn ? (
                <Post />
              ) : (
                <Navigate to="/login" />
                // <Login
                //   setLoggedIn={setLoggedIn}
                //   setUserInformation={setUserInformation}
                //   setError={setErrors}
                // />
              )
            }
          />

          <Route
            path="/home"
            element={
              loggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
                // <Login
                //   setLoggedIn={setLoggedIn}
                //   setUserInformation={setUserInformation}
                //   setError={setErrors}
                // />
              )
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//   else {
//     return (
//       <Box sx={{ display: "flex" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }
// }

export default App;
