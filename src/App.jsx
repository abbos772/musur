import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Korzinka from "./components/Korzinka/Korzinka";
import Like from "./components/Like/Like";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="Like" element={<Like />} />
      </Routes>
    </>
  );
}

export default App;
