// Importing libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/app.scss";
import {Navbar} from "./components/nav.jsx";
import {Story} from "./components/story.jsx";


// Main Story component
export const App = () => {
  return (
    <>
    <audio src="" type="audio/mpeg"></audio>
      <Router>
      <Navbar/>
      // this is a route to the login and home/story page of the website
        <Routes>
          <Route path="/" element={<Story />} /> // the link of the home/story page
          <Route path="/login" element={<Login />}/> // the link to the login page of the website
        </Routes>
    </Router>
    </>
  )
}