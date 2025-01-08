// Importing libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav.jsx";
import { Story } from "./components/story.jsx";
import { Login } from './components/login.jsx';
import { SignIn } from './components/signin.jsx';



// Main Story component
export const App = () => {
  return (
    <>
      <audio src="" type="audio/mpeg"></audio>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  )
}