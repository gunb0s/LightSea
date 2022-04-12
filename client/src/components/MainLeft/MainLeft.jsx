import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;

const Container = styled.div`
  background-image: url("sampleImage/Resource/MainBG.jpg");
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  position: relative;
  top: 3%;
`;
const Title = styled.span`
  color: white;
  font-size: 5.6rem;
  letter-spacing: 3.3rem;
`;

const DescWrapper = styled.div`
  position: relative;
  top: 20%;
`;
const Desc = styled.span`
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
`;

const GalleryContainer = styled.div`
  position: relative;
  top: 45%;
  width: 100%;
`;
const GalleryTabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  widht: 100%;
  margin-right: 5%;
  margin-left: 5%;
  padding-bottom: 2%;
  border-bottom: 3px solid gray;
`;
const GalleryTab = styled.span`
  font-size: 2rem;
  color: white;
  letter-spacing: 0.7rem;
`;

const GalleryTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 5%;
  padding-bottom: 5%;
`;
const GalleryTitle = styled.span`
  color: white;
  font-size: 4rem;
  letter-spacing: 0.9rem;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const NFT = styled.img.attrs((props) => ({
  src: `sampleImage/Resource/${props.idx}.jpg`,
  alt: "nft",
}))`
  width: 220px;
  height: 280px;
`;

const MainLeft = () => {
  return (
    <ContainerWrapper>
      <Container>
        <TitleWrapper>
          <Title>LIGHT SEA</Title>
        </TitleWrapper>
        <DescWrapper>
          <Desc>Space Travel NFT Marketplace For Space Traveler</Desc>
        </DescWrapper>
        <GalleryContainer>
          <GalleryTabWrapper>
            <GalleryTab>NFTs</GalleryTab>
            <GalleryTab>Use</GalleryTab>
            <GalleryTab>Service</GalleryTab>
          </GalleryTabWrapper>
          <GalleryTitleWrapper>
            <GalleryTitle>NFTs</GalleryTitle>
          </GalleryTitleWrapper>
          <GalleryWrapper>
            <Gallery>
              {new Array(6).fill(0).map((_, idx) => {
                return <NFT idx={idx + 1} />;
              })}
            </Gallery>
          </GalleryWrapper>
        </GalleryContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default MainLeft;
