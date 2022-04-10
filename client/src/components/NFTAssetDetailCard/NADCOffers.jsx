import React from "react";
import styled from "styled-components";
import { Container as ButtonContainer, Button } from "./NADCPriceHistory";
import { Body, ContentContainer } from "./NADCSummary";
import { Toc } from "@material-ui/icons";

const Container = styled.div`
  margin: 20px;
  flex: 1 0 0 %;
  max-width: 750px;
`;

const NADCOffers = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button style={{ marginBottom: "2px" }}>
          <Toc />
          <span style={{ marginLeft: "10px" }}>Offers</span>
        </Button>
        <Body>
          <ContentContainer>TobeFilled</ContentContainer>
        </Body>
      </ButtonContainer>
    </Container>
  );
};

export default NADCOffers;
