import React from "react";
import styled from "styled-components";
import NFTCard from "./NFTCard/NFTCard";

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

const NFTCardList = () => {
  return (
    <NFTContainer>
      <NFTGalleryWrapper>
        <NFTGallery>
          {new Array(10).fill(0).map((v, idx) => (
            <NFTCard key={idx} idx={idx} />
          ))}
        </NFTGallery>
      </NFTGalleryWrapper>
    </NFTContainer>
  );
};

export default NFTCardList;
