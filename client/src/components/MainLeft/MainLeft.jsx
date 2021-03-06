import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 80vw;
  height: 100%;
  background-color: rgb(35, 39, 40);

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Container = styled.div`
  background-image: url("/sampleImage/Resource/MainBG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 100%;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  position: relative;
  /* top: 10%; */
  margin-top: 700px;
`;
const Title = styled.span`
  color: white;
  font-size: 3.5rem;
  letter-spacing: 3rem;
  font-weight: 300;
  font-family: "Englisgh Gilroy-Light";
  user-select: none;
`;

const DescWrapper = styled.div`
  position: relative;
  top: 20%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescTitle = styled.div`
  color: white;
  font-size: 1.5vw;
  letter-spacing: 0.5rem;
  font-family: "Englisgh Gilroy-Light";
  font-weight: 200;
  width: 80%;
  border-bottom: 2px solid gray;
  padding-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  user-select: none;

  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;

const Desc = styled.pre`
  color: rgb(100, 100, 100);
  font-size: 1.8vw;
  font-family: "Korean Cafe24SsurroundAir";
  font-weight: 100;
  letter-spacing: 0.2rem;
  line-height: 3.7vw;
  width: 80%;
  padding-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  user-select: none;

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 2vw;
  }
`;

const GalleryContainer = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
`;

const GalleryTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GalleryTitle = styled.span`
  color: white;
  font-size: 3.5vw;
  font-family: "Englisgh Gilroy-Light";
  font-weight: 200;
  letter-spacing: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding-bottom: 2rem;
  border-bottom: 2px solid gray;

  user-select: none;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const Gallery = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const NFT = styled.img.attrs((props) => ({
  src: `sampleImage/Resource/${props.idx}.jpg`,
  alt: "nft",
}))`
  width: 260px;
  height: 300px;
`;

const Traveler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Korean Cafe24SsurroundAir";
  font-weight: light;
  color: rgb(150, 150, 150);
  font-size: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const MainLeft = () => {
  return (
    <ContainerWrapper>
      <Container>
        <TitleWrapper>{/* <Title>LIGHTSEA</Title> */}</TitleWrapper>
        <DescWrapper>
          <DescTitle>Space Travel NFT Marketplace For Space Traveler</DescTitle>
          <Desc>
            LIGHT SEA??? ?????? ??????????????? ?????? <br />
            ?????? ?????? ?????? ?????? ?????? <br />
            NFT MARKET PLACE????????? <br />
            <br />
            LIGHT SEA??? ?????? ??????????????? ????????? ????????? ?????? ?????? ????????? ??????
            <br />
            NFT?????????????????? ?????? ?????? ?????? ????????? ????????? ????????? ???????????????
            <br />
          </Desc>
        </DescWrapper>
        <GalleryContainer>
          <GalleryTitleWrapper>
            <GalleryTitle>NFT</GalleryTitle>
          </GalleryTitleWrapper>
          <GalleryWrapper>
            <Gallery>
              {new Array(8).fill(0).map((_, idx) => {
                return <NFT key={idx} idx={idx + 1} />;
              })}
            </Gallery>
          </GalleryWrapper>
        </GalleryContainer>
        <GalleryContainer>
          <GalleryTitleWrapper>
            <GalleryTitle
              style={{
                letterSpacing: "0.5rem",
                fontSize: "2rem",
                fontWeight: 100,
              }}
            >
              SPACE TRAVELER
            </GalleryTitle>
          </GalleryTitleWrapper>
          <Traveler>?????????</Traveler>
          <Traveler>?????????</Traveler>
          <Traveler>?????????</Traveler>
          <Traveler>?????????</Traveler>
        </GalleryContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default MainLeft;
