import React from "react";
import styled from "styled-components";
import ControlledCarousel from "../ControlledCarousel/ControlledCarousel";

const ContainerWrapper = styled.div`
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
  position: absolute;
  top: 10%;
`;
const Title = styled.span`
  font-size: 5rem;
  color: rgb(242, 242, 243);
  letter-spacing: 2.5rem;
  word-spacing: 3.5rem;
`;

const CarouselWrapper = styled.div`
  position: absolute;
  top: 25%;
  width: 300px;
  height: 300px;
`;

const MainRight = () => {
  return (
    <ContainerWrapper>
      <Container>
        <TitleWrapper>
          <Title>NFTs</Title>
        </TitleWrapper>
        <CarouselWrapper>
          <ControlledCarousel />
        </CarouselWrapper>
      </Container>
    </ContainerWrapper>
  );
};

export default MainRight;
