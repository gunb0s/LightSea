import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Filter from "../components/Filter/Filter";
import NFTCardList from "../components/NFTCardList/NFTCardList";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Explore = () => {
  const [nfts, setNfts] = useState([]);

  const getNFTs = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/nfts");
      if (data === "no result") return;
      setNfts((prev) => {
        return [...data];
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNFTs();
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(35, 39, 40)" }}>
      <Navigation />
      <div style={{ display: "flex" }}>
        <Filter />
        <NFTCardList nfts={nfts} />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
