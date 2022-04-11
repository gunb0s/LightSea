import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  background-image: url("sampleImage/Resource/LeftMain.jpg");
  background-size: cover;
  background-position: center center;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: relative;
  top: 10%;
`;
const Title = styled.span`
  font-size: 5rem;
  color: rgb(242, 242, 243);
  letter-spacing: 2.5rem;
  word-spacing: 3.5rem;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  top: 40%;
`;
const Description = styled.span`
  color: rgb(176, 178, 179);
  font-size: 1.4rem;
  letter-spacing: 0.5rem;
`;

const MainLeft = () => {
  return (
    <ContainerWrapper>
      <Container>
        <TitleWrapper>
          <Title>LIGHT SEA</Title>
        </TitleWrapper>

        <DescriptionWrapper>
          <Description>
            Space Travel NFT Marketplace For Space Traveler
          </Description>
        </DescriptionWrapper>
      </Container>
    </ContainerWrapper>
  );
};

export default MainLeft;
