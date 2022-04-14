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
            <video
              poster="https://lh3.googleusercontent.com/vbEAsCFPx1IiwjirVUDS8TQGOOKWjRX7SKno5WReBc6nQZ3haTKq4zcSfLOqPxw8jkSMM0ZllpBsLoUF3AAYKn_1fH_V4m58OMnW"
              preload="metadata"
              autoPlay
              controls={true}
              controlsList="nodownload"
              playsInline
              loop
              style={{
                width: "520px",
                height: "520px",
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "initial",
                opacity: 1,
              }}
            >
              <source
                src="https://openseauserdata.com/files/3565db33a856b19f48396062e59e6d62.mp4#t=0.001"
                type="video/mp4"
              />
            </video>
          </Image>
        </ImageMain>
      </ImageWrapper>
    </Frame>
  );
};

export default NADCImage;
