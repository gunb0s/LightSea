import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Filter from "../components/Filter/Filter";
import NFTCardList from "../components/NFTCardList/NFTCardList";
import Footer from "../components/Footer/Footer";
import ProfileBanner from "../components/ProfileBanner/ProfileBanner";
import axios from "axios";

const Account = ({ address }) => {
  const [nfts, setNfts] = useState([]);

  // thirdweb3로 처리하는 방식으로 바뀔 수 있음
  const getNFTOfAccount = async () => {
    try {
      const { data } = await axios.get(`/api/v1/${address}`);
      setNfts((prev) => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getNFTOfAccount();
  }, []);
  const CSS_AccountBG = "rgb(20,20,20)";

  return (
    <div style={{backgroundColor:CSS_AccountBG}}>
      <Navigation />
      <ProfileBanner CSS_AccountBG={CSS_AccountBG}/>
      <div style={{ display: "flex", backgroundColor:CSS_AccountBG}}>
        <Filter />
        <NFTCardList />
      </div>
      <Footer />
    </div>
  );
};

export default Account;
