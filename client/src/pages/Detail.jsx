import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import NFTAssetDetailCard from "../components/NFTAssetDetailCard/NFTAssetDetailCard";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  bacground-color: white;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Detail = ({ contract, tokenID }) => {
  const [nftData, setNftData] = useState({});

  const getNFTDetail = async () => {
    try {
      const { data } = await axios.get(`/api/v1/${contract}/${tokenID}`);
      setNftData((prev) => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getNFTDetail()
  }, []);

  return (
    <Container>
      <Navigation />
      <Main>
        <NFTAssetDetailCard />
      </Main>
    </Container>
  );
};

export default Detail;
