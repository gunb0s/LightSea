import React from "react";
import Navigation from "../components/Navigation/Navigation";
import NFTAssetDetailCard from "../components/NFTAssetDetailCard/NFTAssetDetailCard";
import styled from "styled-components";

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

const Detail = () => {
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
