import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Detail from "./pages/Detail";

export const Context = createContext();

const App = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
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
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account/:address" element={<Account />} />
          <Route path="/assets/:contract/:tokenId" element={<Detail />} />
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
