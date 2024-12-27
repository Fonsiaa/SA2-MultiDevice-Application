// Importing libraries and components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/storytelling.scss";
import {Navbar} from "./components/nav.jsx";
import {Loop} from "./components/loop.jsx";

const Home = () => <h2>The Story </h2>
const LogIn = () => <h2>hwww </h2>
const Contact = () => <h2>woww </h2>

// Main Story component
export const Story = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Log" element={<LogIn />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>

    <Loop/>
    </>
    
  )
}