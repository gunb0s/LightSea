import React from "react";
import styled from "styled-components";

export const Frame = styled.article`
  margin: 20px;
  border-radius: 10px;
  border: 1px solid rgb(229, 232, 235);
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  max-height: 1000px;
  width: 600px;
  min-height: 200px;
  height: 100%;
  border-radius: inherit;
`;

const ImageMain = styled.div`
  display: flex;
  height: 100%;
  min-height: inherit;
  width: 100%;
  position: relative;
  border-radius: inherit;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const NADCImage = () => {
  return (
    <Frame>
      <ImageWrapper>
        <ImageMain>
          <Image>
            <img
              src="sampleImage/N101.png"
              alt="nft"
              style={{
                width: "520px",
                height: "520px",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "initial",
                opacity: 1,
              }}
            />
          </Image>
        </ImageMain>
      </ImageWrapper>
    </Frame>
  );
};

export default NADCImage;
