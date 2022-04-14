import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 80vw;
  height: 100%;
  background-color: rgb(35, 39, 40);
`;

const Container = styled.div`
  background-image: url("/sampleImage/Resource/MainBG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center center; */
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
  margin-top: 500px;
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
  font-size: 2rem;
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
`;

const Desc = styled.pre`
  color: rgb(100, 100, 100);
  font-size: 2rem;
  font-family: "Korean Cafe24SsurroundAir";
  font-weight: 100;
  letter-spacing: 0.2rem;
  line-height: 5rem;
  width: 80%;
  padding-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  user-select: none;
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
  font-size: 4rem;
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
            LIGHT SEA는 우주 여행자들을 위한 <br />
            국내 유일 우주 관광 산업 <br />
            NFT MARKET PLACE입니다 <br />
            <br />
            LIGHT SEA는 우주 여행자들의 가볍고 즐거운 행성 여행 라이프 위해
            <br />
            NFT소유자들에게 우주 여행 관련 다양한 혜택과 권리를 제공합니다
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
          <Traveler>임준영</Traveler>
          <Traveler>김보성</Traveler>
          <Traveler>윤다미</Traveler>
          <Traveler>김경식</Traveler>
        </GalleryContainer>
      </Container>
    </ContainerWrapper>
  );
};

export default MainLeft;
