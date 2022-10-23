import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Component/Header";
import React from "react";
import Login from "./Component/Home";
import Pemesanan from "./Component/pemesanan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Headers />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/pemesanan/:id" element={<Pemesanan />} />
      </Routes>
    </Router>
  );
}

export default App;
