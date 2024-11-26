import React from "react";
import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context";

import Home from "./pages/Home";
import List from "./pages/List";

import "./App.css";

function App() {
  return (
    <>
      {/*basename="/hrnet/"*/}
      <Routing basename="/hrnet/">
        <UserContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/list" element={<List />}></Route>
          </Routes>
        </UserContextProvider>
      </Routing>
    </>
  );
}

export default App;
