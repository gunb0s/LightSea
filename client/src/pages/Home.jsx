import React from "react";
import styled from "styled-components";
import MainLeft from "../components/MainLeft/MainLeft";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 150vh;
  margin: 0px;
  background-color: rgb(35, 39, 40);
`;

const Container = styled.div`
  min-height: 100%;
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 5 1 0;
`;

const RightContainer = styled.div`
  flex: 5 1 0;
`;

const Home = () => {
  return (
    <>
      <ContainerWrapper>
        <Navigation />
        <Container>
          <LeftContainer>
            <MainLeft></MainLeft>
          </LeftContainer>
          <RightContainer></RightContainer>
        </Container>
        <Footer />
      </ContainerWrapper>
    </>
  );
};

export default Home;
