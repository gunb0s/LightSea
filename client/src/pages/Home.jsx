import Filter from "../components/Filter/Filter";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import NFTCardList from "../components/NFTCardList/NFTCardList";
import ProfileBanner from "../components/ProfileBanner/ProfileBanner";

const Home = () => {
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

export default Home;