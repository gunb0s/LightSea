import React from "react";
import styled from "styled-components";
import NADCHeaders from "./NADCHeaders";
import NADCImage from "./NADCImage";
import NADCSummary from "./NADCSummary";
import { Frame } from "./NADCImage";
import NADCTrade from "./NADCTrade";
import NADCPriceHistory from "./NADCPriceHistory";
import NADCListings from "./NADCListings";
import NADCOffers from "./NADCOffers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(35, 39, 40);
`;

const ItemContainer = styled.div`
  width: 1280px;
  padding: 8px 8px 16px;
  max-width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemSummary = styled.div`
  flex: 3 0 0%;
  max-width: 43%;
  width: 0px;
`;

const ItemMain = styled.div`
  flex: 4 0 0%;
  margin-left: -20px;
`;

const NFTAssetDetailCard = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemWrapper>
          <ItemSummary>
            <NADCImage />
            <NADCSummary />
          </ItemSummary>
          <ItemMain>
            <NADCHeaders />
            <Frame>
              <NADCTrade />
            </Frame>
            <Frame>
              <NADCPriceHistory />
            </Frame>
            <div>
              <NADCListings />
              <NADCOffers />
            </div>
          </ItemMain>
        </ItemWrapper>
      </ItemContainer>
    </Container>
  );
};

export default NFTAssetDetailCard;
