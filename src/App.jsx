import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/NavBar";
import Event from "./pages/Event";
import Photo from "./pages/Photo";
import Dashboard from "./pages/DashBoard";
import Family from "./pages/Family";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/photos" element={<Photo />} />
          <Route path="/events" element={<Event />} />
          <Route path="/family" element={<Family />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
