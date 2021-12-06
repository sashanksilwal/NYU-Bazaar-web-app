import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/login/login";
import CreateUser from "./containers/createUser/createUser";
import Dashboard from "./containers/dashboard/dashboard";
import AddPost from "./containers/addPost/addPost";
import UserProfile from "./containers/userProfile/userProfile";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/user:id" element={<UserProfile />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
