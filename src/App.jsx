// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from './components/NavBar';
import CreateEvent from "./components/CreateEvents"
import ViewPhotos from "./components/ViewPhotos";
import PhotoUpload from "./components/PhotoUpload";
import Photo from './pages/Photo'
import Event from './pages/Event'
import Dashboard from "./pages/DashBoard";
import Family from "./pages/Family"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/photos" element={<Photo/>}/>
          <Route path="/upload" element={<PhotoUpload/>}/>
          <Route path="/view" element={<ViewPhotos/>}/>
          <Route path="/events" element={<Event/>} />
          <Route path="/createEvent" element={<CreateEvent/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/family" element={<Family/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* page ko height overflow vayeko chha need to check that, in all the pages */

