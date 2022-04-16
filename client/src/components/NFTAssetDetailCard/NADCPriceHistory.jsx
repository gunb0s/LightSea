import React from "react";
import { Timeline } from "@material-ui/icons";
import styled from "styled-components";
import { Body, ContentContainer } from "./NADCSummary";

export const Container = styled.div`
  border-radius: 10px;
  border-right: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-image: initial;
  border-top: none;
  color: rgb(4, 17, 29);
  background-color: rgb(255, 255, 255);
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  align-items: center;
  border-radius: 10px;
  border-top: 1px solid rgb(229, 232, 235);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  user-select: none;
  background-color: rgb(255, 255, 255);

  border: 0px;
  background: inherit;
  font-family: inherit;
`;

const NADCPriceHistory = ({ salesHistory }) => {
  return (
    <Container>
      <Button>
        <Timeline />
        <span style={{ marginLeft: "10px" }}>Price History</span>
      </Button>
      <Body>
        <ContentContainer>
          {salesHistory.length === 0 ? (
            "No History"
          ) : (
            <div style={{ marginBottom: "1rem" }}>
              {salesHistory.map((elem, idx) => (
                <div key={idx}>
                  <div>from: {elem.from.slice(0, 5)}...</div>
                  <div>to: {elem.to.slice(0, 5)}...</div>
                  <div>price: {elem.price}</div>
                  <div>
                    Date: {parseInt((Date.now() - elem.date) / 86400000)} days
                    before
                  </div>
                </div>
              ))}
            </div>
          )}
        </ContentContainer>
      </Body>
    </Container>
  );
};

export default NADCPriceHistory;
