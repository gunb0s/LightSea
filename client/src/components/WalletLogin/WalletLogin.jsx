import React, { useContext } from "react";
import styled from "styled-components";
// import { useWeb3 } from "@3rdweb/hooks";
import { Context } from "../../App";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: rgb(112, 122, 131);
  margin: 0px;
`;

const WalletList = styled.ul`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: none;
  border: 1px solid rgb(229, 232, 235);
  border-radius: 10px;
  margin: 0px;

  & > :not(:last-child) {
    border-bottom: 1px solid rgb(229, 232, 235);
  }

  & > :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & > :first-child > button:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const WalletButton = styled.button`
  border: none;
  overflow: hidden;
  width: 100%;
  font-weight: 600;
  padding: 16px;
  color: rgb(53, 56, 64);
  text-align: left;
  display: inline-flex;
  align-items: center;
  font-size: 100%;
  font-family: inherit;
  background: inherit;
`;

const WalletLogoWrapper = styled.div`
  align-self: center;
  order: 2;
  margin-right: 16px;
  flex-shrink: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 24px;
`;

const WalletLogo = styled.img.attrs((props) => ({
  src: props.src,
  alt: "logo",
}))`
  object-fit: contain;
  height: 24px;
  width: 24px;
  font-weight: 600;
  color: rgb(53, 56, 64);
  text-align: left;
  font-size: 100%;
  font-family: inherit;
`;

const WalletTitle = styled.div`
  display: flex;
  font-weight: 600;
  color: rgb(53, 56, 64);
  text-align: left;
  align-self: stretch;
  flex: 1 1 auto;
  font-family: inherit;
  flex-flow: column;
  justify-content: center;
  margin-right: 16px;
  order: 3;
  overflow: hidden;
  font-size: 16px;
  align-items: flex-start;
`;

const AdditionalWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 40%;
  order: 4;
  overflow: hidden;
  text-align: right;

  & > span {
    font-weight: 500;
    font-size: 12px;
    color: rgb(112, 122, 131);
  }
`;

const AdditionalPopualr = styled.div`
  background-color: rgb(32, 129, 226);
  color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 4px 8px;
`;

const AdditionalSolana = styled(AdditionalPopualr)`
  background-color: rgb(229, 232, 235);
  color: rgb(112, 122, 131);
`;

const WalletLogin = () => {
  // ThirdWeb Metamask 연동
  // const { address, connectWallet } = useWeb3();
  const { setAddress } = useContext(Context);
  return (
    <Container>
      <Title>Connect you wallet</Title>
      <div>
        <div>
          <Desc>Connect with one of our available wallet providers.</Desc>
        </div>
        <div style={{ marginTop: "24px", marginBottom: "72px" }}>
          <WalletList>
            <div style={{ width: "100%" }}>
              {/* 메타마스크 지갑 연결 부분 */}
              <WalletButton
                onClick={async () => {
                  if (window.ethereum === undefined) {
                    return;
                  }

                  const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });

                  console.log(accounts);

                  setAddress(accounts[0]);
                }}
              >
                <WalletLogoWrapper>
                  <WalletLogo src="https://opensea.io/static/images/logos/metamask-alternative.png" />
                </WalletLogoWrapper>
                <WalletTitle>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    MetaMask
                  </span>
                </WalletTitle>
                <AdditionalWrapper>
                  <span>
                    <AdditionalPopualr>Popular</AdditionalPopualr>
                  </span>
                </AdditionalWrapper>
              </WalletButton>
            </div>
            <div style={{ width: "100%" }}>
              <WalletButton>
                <WalletLogoWrapper>
                  <WalletLogo src="https://static.opensea.io/logos/walletconnect-alternative.png" />
                </WalletLogoWrapper>
                <WalletTitle>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    WalletConnect
                  </span>
                </WalletTitle>
              </WalletButton>
            </div>
            <div style={{ width: "100%" }}>
              <WalletButton>
                <WalletLogoWrapper>
                  <WalletLogo src="	https://opensea.io/static/images/logos/phantom.svg" />
                </WalletLogoWrapper>
                <WalletTitle>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Phantom
                  </span>
                </WalletTitle>
                <AdditionalWrapper>
                  <span>
                    <AdditionalSolana>Solana</AdditionalSolana>
                  </span>
                </AdditionalWrapper>
              </WalletButton>
            </div>
            <div style={{ width: "100%" }}>
              <WalletButton>
                <WalletLogoWrapper>
                  <WalletLogo src="	https://static.opensea.io/logos/walletlink-alternative.png" />
                </WalletLogoWrapper>
                <WalletTitle>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Coinbase Wallet
                  </span>
                </WalletTitle>
              </WalletButton>
            </div>
          </WalletList>
        </div>
      </div>
    </Container>
  );
};

export default WalletLogin;
