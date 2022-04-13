import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Detail from "./pages/Detail";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Context = createContext();

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Context.Provider value={{ login }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account" element={<Account />} />
          <Route path="/assets/:hash" element={<Detail />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
