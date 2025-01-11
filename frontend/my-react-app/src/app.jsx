// Importing libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//the nav bar
import { Navbar } from "./components/nav.jsx";

//components for the nav bar
import { Story } from "./components/story.jsx";
import { Login } from "./components/login.jsx";
import { Signin } from "./components/signin.jsx";

//footer
import { Footer } from "./components/footer.jsx";



// Main Story component
export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignIn" element={<Signin />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}