import React from "react";
import styled from "styled-components";
import {
  AccountBalanceWallet,
  CreditCard,
  LocalOffer,
} from "@material-ui/icons";

const Container = styled.section`
  border-radius: 10px;
  border: 1px solid rgb(229, 232, 235);
  overflow: hidden;
`;

const Main = styled.main`
  padding: 20px;
  background-color: rgb(251, 253, 255);
`;

const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const PriceMain = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(53, 56, 64);
  width: fit-content;
  max-width: 100%;
`;

const Eth = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 24px;
  height: 24px;
`;

const Price = styled.div`
  margin-left: 0.3em;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PriceFiat = styled.div`
  font-size: 15px;
  margin-top: 15px;
  margin-left: 8px;
  color: rgb(112, 122, 131);
  width: fit-content;
  max-width: 100%;
`;

const ButtonContainer = styled.div`
  display: block;
  max-width: 420px;
`;

const Top = styled.div`
  display: inline-flex;
  width: 100%;
`;

const ButtonTop = styled.div`
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 20px;
  background-color: rgb(32, 129, 226);
  border: 1px solid rgb(32, 129, 226);
  color: rgb(255, 255, 255);
  width: 100%;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 12px;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 8px;

  & > * {
    width: 50%;
  }
`;

const ButtonBottom = styled(ButtonTop)`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(32, 129, 226);
  color: rgb(32, 129, 226);
`;

const NADCTrade = () => {
  return (
    <div>
      <Container>
        <Main>
          <div style={{ color: "rgb(112, 122, 131)" }}>Current price</div>
          <PriceContainer>
            <PriceMain>
              <div>
                <a
                  href="/"
                  style={{ color: "rgb(32, 129, 226)", textDecoration: "none" }}
                >
                  <Eth>
                    <img
                      src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"
                      alt="eth"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </Eth>
                </a>
              </div>
              <Price>10</Price>
            </PriceMain>
            <PriceFiat>
              <div>($32250)</div>
            </PriceFiat>
          </PriceContainer>
          <ButtonContainer>
            <div style={{ width: "100%", display: "contents" }}>
              <Top>
                <ButtonTop>
                  <LogoWrapper>
                    <AccountBalanceWallet />
                  </LogoWrapper>
                  Buy now
                </ButtonTop>
              </Top>
              <Bottom>
                <div>
                  <ButtonBottom>
                    <LogoWrapper>
                      <CreditCard />
                    </LogoWrapper>
                    Buy with card
                  </ButtonBottom>
                </div>
                <div style={{ marginLeft: "8px" }}>
                  <ButtonBottom>
                    <LogoWrapper>
                      <LocalOffer />
                    </LogoWrapper>
                    Make offer
                  </ButtonBottom>
                </div>
              </Bottom>
            </div>
          </ButtonContainer>
        </Main>
      </Container>
    </div>
  );
};

export default NADCTrade;
