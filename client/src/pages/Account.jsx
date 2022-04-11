import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Filter from "../components/Filter/Filter";
import NFTCardList from "../components/NFTCardList/NFTCardList";
import Footer from "../components/Footer/Footer";
import ProfileBanner from "../components/ProfileBanner/ProfileBanner";

const Account = () => {
  return (
    <div>
      <Navigation />
      <ProfileBanner />
      <div style={{ display: "flex" }}>
        <Filter />
        <NFTCardList />
      </div>
      <Footer />
    </div>
  );
};

export default Account;
