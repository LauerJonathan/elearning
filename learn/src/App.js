import React from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <Routing>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/list" element={<List />}></Route>
      </Routes>
    </Routing>
  );
}

export default App;
