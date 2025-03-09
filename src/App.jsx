import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
