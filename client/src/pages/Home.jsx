import React from "react";
import styled from "styled-components";
import MainLeft from "../components/MainLeft/MainLeft";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0px;
  height: 300vh;
  background-color: rgb(35, 39, 40);
`;

const Container = styled.div`
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: flex;
`;

const Home = () => {
  return (
    <>
      <ContainerWrapper>
        <Navigation />
        <Container>
          <MainLeft />
        </Container>
      </ContainerWrapper>
      <Footer />
    </>
  );
};

export default Home;
