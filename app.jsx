// Importing libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//the nav bar
import { Navbar } from "./src/components/nav.jsx";

//components for the nav bar
import { Story } from "./src/components/story.jsx";
import { Login } from "./src/components/login.jsx";
import { Signin } from "./src/components/signin.jsx";

//footer
import { Footer } from "./src/components/footer.jsx";

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
      </Router>

      <Footer/>
    </>
  )
}