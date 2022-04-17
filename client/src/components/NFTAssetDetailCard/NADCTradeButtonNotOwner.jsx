import React, { useContext } from "react";
import { Context } from "../../App";
import styled from "styled-components";
import { AccountBalanceWallet } from "@material-ui/icons";
import axios from "axios";
import { ethers } from "ethers";

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

const Top = styled.div`
  display: inline-flex;
  width: 100%;
`;

const ButtonTop = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
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

const NADCTradeButtonNotOwner = ({ onSale, ca, owner, tokenID, price }) => {
  const { address } = useContext(Context);

  const handleClick = async () => {
    if (onSale) {
      if (address === "") {
        alert("Connect Wallet first");
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.getSigner().sendTransaction({
        to: owner,
        value: ethers.utils.parseEther(price),
      });

      await axios.post("https://light-sea-server.herokuapp.com/api/v1/tx/buy", {
        price,
        ca,
        tokenID,
        owner,
        address,
      });
    } else {
      alert("Not on sale!");
    }
  };

  return (
    <>
      <Top>
        <ButtonTop onClick={handleClick}>
          <LogoWrapper>
            <AccountBalanceWallet />
          </LogoWrapper>
          Buy now
        </ButtonTop>
      </Top>
      <Bottom></Bottom>
    </>
  );
};

export default NADCTradeButtonNotOwner;
