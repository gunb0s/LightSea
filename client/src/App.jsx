import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import Detail from './pages/Detail';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

export const Context = createContext();

const supportedChainIds = [3];
const connectors = {
  injected: {},
};

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Context.Provider value={{ login }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/account" element={<Account />} />
            <Route path="/assets/:hash" element={<Detail />} />
          </Routes>
        </Context.Provider>
      </ThirdwebWeb3Provider>
    </>
  );
};

export default App;
