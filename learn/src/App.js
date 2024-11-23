import React from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";

import "./App.css";

function App() {
  return (
    <>
      <Routing basename="https://LauerJonathan.github.io/elearning/">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/list" element={<List />}></Route>
        </Routes>
      </Routing>
    </>
  );
}

export default App;
