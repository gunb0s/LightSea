import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Filter from "../components/Filter/Filter";
import NFTCardList from "../components/NFTCardList/NFTCardList";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Explore = () => {
  const { search } = useParams();
  const [nfts, setNfts] = useState([]);

  const getNFTs = async (search) => {
    try {
      let url =
        search === undefined
          ? "https://light-sea-server.herokuapp.com/api/v1/nfts"
          : `https://light-sea-server.herokuapp.com/api/v1/nfts/${search}`;

      const { data } = await axios.get(url);
      if (data === "no result") return;
      setNfts((prev) => {
        return [...data];
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (search === undefined) {
      getNFTs();
    } else {
      getNFTs(search);
    }
  }, [search]);

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
