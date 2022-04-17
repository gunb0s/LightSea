import React from "react";
import styled from "styled-components";
import { Frame } from "./NADCImage";
import { Subject, Label, VerticalSplit, Ballot } from "@material-ui/icons";

const DivContainer = styled.div`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgb(229, 232, 235);
  margin-bottom: -1px;
  margin-top: 1px;
  border-radius: 0px;
  color: rgb(4, 17, 29);
  background-color: rgb(255, 255, 255);
  overflow: hidden;
`;

const Button = styled.div`
  border: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  user-select: none;
  background-color: white;
`;

const Name = styled.span`
  margin-left: 10px;
`;

export const Body = styled.div`
  border-radius: 0px;
  border-left: 0px;
  border-right: 0px;
  border-top: 1px solid rgb(229, 232, 235);
  color: rgb(53, 56, 64);
  background-color: rgb(251, 253, 255);
`;

export const ContentContainer = styled.div`
  height: initial;
  max-height: 200px;
  overflow: auto;
  padding: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const NADCSummary = ({ metadata }) => {
  return (
    <Frame>
      <div>
        <div>
          <DivContainer>
            <Button>
              <Subject />
              <Name>Description</Name>
            </Button>
            <Body>
              <ContentContainer>{metadata.description}</ContentContainer>
            </Body>
          </DivContainer>
        </div>
        <div>
          <DivContainer>
            <Button>
              <Label />
              <Name>Properties</Name>
            </Button>
            <Body>
              <ContentContainer>
                {metadata.attributes.length === 0 ? (
                  "No attributes"
                ) : (
                  <div>
                    {metadata.attributes.map((elem, idx) => (
                      <div style={{ marginBottom: "1rem" }} key={idx}>
                        <div>Type: {elem.trait_type}</div>
                        <div>Value: {elem.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </ContentContainer>
            </Body>
          </DivContainer>
        </div>
        <div>
          <DivContainer>
            <Button>
              <VerticalSplit />
              <Name>NFTType</Name>
            </Button>
            <Body>
              <ContentContainer>TobeFilled</ContentContainer>
            </Body>
          </DivContainer>
        </div>
        <div>
          <DivContainer>
            <Button>
              <Ballot />
              <Name>Details</Name>
            </Button>
            <Body>
              <ContentContainer>TobeFilled</ContentContainer>
            </Body>
          </DivContainer>
        </div>
      </div>
    </Frame>
  );
};

export default NADCSummary;
