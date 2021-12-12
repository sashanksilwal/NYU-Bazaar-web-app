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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Post from "./containers/Post/post";

const FirebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
  appId: process.env.REACT_APP_APP_ID,
  // apiKey: "AIzaSyAmNfmot7JAWfRj8fETJrWGS2UnL0f-E3U",
  // authDomain: "final-project-ac590.firebaseapp.com",
  // projectId: "final-project-ac590",
  // storageBucket: "final-project-ac590.appspot.com",
  // messagingSenderId: "997232705866",
  // appId: "1:997232705866:web:37e6d2f362e241f20141b3",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLodaing] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  const [errors, setErrors] = useState();

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
        setLodaing(false);
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

  if (appInitialized & !loading) {
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
                  <Navigate to="/" />
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
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/user/:id"
              element={
                loggedIn ? (
                  <UserProfile userInformation={userInformation} />
                ) : (
                  <Login
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                    setError={setErrors}
                  />
                )
              }
            />

            <Route
              path="/addpost"
              element={
                loggedIn ? (
                  <AddPost userInformation={userInformation} />
                ) : (
                  <Login
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                    setError={setErrors}
                  />
                )
              }
            />
            <Route
              path="/post/:slug"
              element={
                loggedIn ? (
                  <Post />
                ) : (
                  <Login
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                    setError={setErrors}
                  />
                )
              }
            />
            <Route
              path="/"
              element={
                loggedIn ? (
                  <Dashboard />
                ) : (
                  <Login
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                    setError={setErrors}
                  />
                )
              }
            />
            <Route
              path="/:anything"
              element={
                loggedIn ? (
                  <Dashboard />
                ) : (
                  <Login
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                    setError={setErrors}
                  />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
}

export default App;
