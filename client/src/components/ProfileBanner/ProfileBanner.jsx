import React from "react";
import styled from "styled-components";
import ProfilePageNavbar from "../ProfilePageNavbar/ProfilePageNavbar";

const BackgroundWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  height: 225px;
  min-height: 120px;
  backgroundwrapper-color: rgb(229, 232, 235);
  overflow: hidden;
`;

const AccountHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  min-height: 200px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 50;
  border: 2px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  margin-top: -64px;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  min-width: 130px;
  min-height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Alias = styled.div`
  display: flex;
  width: 100%;
  max-width: 80vw;
  margin-top: 12px;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 600;
  min-height: 40px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 18px;
  margin-top: 8px;
  position: relative;
`;

const Account = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 100%;
  padding: 0px;
  border: 0px;
  background: inherit;
  margin-right: 8px;
`;

const AddressWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  border: 1px solid rgb(229, 232, 235);
  border-radius: 16px;
`;

const AddressBtn = styled.button`
  display: flex;
  margin-left: 8px;
  margin-top: 1px;
  color: rgb(112, 122, 131);
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  font-family: inherit;
  border: 0px;
  padding: 0px;
  background: inherit;
  align-items: center;
`;

const Address = styled.div`
  margin-right: 8px;
`;

const CreatedAt = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: rgb(112, 122, 131);
  margin-top: 12px;
`;

const ProfileBanner = () => {
  return (
    <div>
      <BackgroundWrapper>
        <img src="sampleImage/bg.png" alt="bg" style={{ width: "100%" }} />
      </BackgroundWrapper>
      <AccountHeader>
        <ImageContainer>
          <img
            src="sampleImage/profile.png"
            alt="profile"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageContainer>
        <Alias>Wartortle</Alias>
        <AccountWrapper>
          <Account>water.eth</Account>
          <AddressWrapper>
            <Account>
              <img
                src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                alt="eth"
                style={{ width: "12px", height: "22px" }}
              />
            </Account>
            <AddressBtn>
              <Address>0xc542...1c7c</Address>
            </AddressBtn>
          </AddressWrapper>
        </AccountWrapper>
        <CreatedAt>Joined December 2020</CreatedAt>
      </AccountHeader>
      <ProfilePageNavbar />
    </div>
  );
};

export default ProfileBanner;
