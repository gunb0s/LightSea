import React from "react";
import styled from "styled-components";
import NFTCard from "../NFTCard/NFTCard";

const NFTContainer = styled.section`
  flex: 1 0 0%;
  padding: 0 28px;
  min-width: 0px;
  border-left: 1px solid rgb(229, 232, 235);
`;

const NFTGalleryWrapper = styled.div`
  padding: 16px 0px;
`;

const NFTGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CSS_NFTCard = { backgroundColor: "white" };

const NFTCardList = ({ nfts }) => {
  return (
    <NFTContainer>
      <NFTGalleryWrapper>
        <NFTGallery>
          {nfts.map((v, idx) => (
            <NFTCard key={idx} nft={v} />
          ))}
        </NFTGallery>
      </NFTGalleryWrapper>
    </NFTContainer>
  );
};

export default NFTCardList;
