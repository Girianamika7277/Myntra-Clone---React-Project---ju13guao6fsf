import React, { useState, createContext } from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";
import NavBar from "./NavBar";

//for sharing data from parent to child components
export const dataFromParent = createContext();

export default function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}