import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Detail from "./pages/Detail";
import Register from "./pages/Register";

export const Context = createContext();

const App = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (window.ethereum === undefined) {
      return;
    }

    window.ethereum.on("accountsChanged", function (accounts) {
      setAddress(window.ethereum.selectedAddress);
    });
  });

  return (
    <>
      <Context.Provider value={{ address, setAddress }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/explore/:search" element={<Explore />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account/:address" element={<Account />} />
          <Route path="/assets/:contract/:tokenId" element={<Detail />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
