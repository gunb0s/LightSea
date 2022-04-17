import React, { useState } from "react";
import styled from "styled-components";
import styles from "./NADCTradeButtonOwner.module.css";
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

const NADCTradeButtonOwner = ({ onSale, ca, owner, tokenID }) => {
  const [price, setPrice] = useState(0);
  const handlePrice = (e) => {
    setPrice((prev) => e.target.value);
  };

  const handleClick = async () => {
    const { data } = await axios.get(
      `https://light-sea-server.herokuapp.com/api/v1/contracts/${ca}`
    );

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ca, data.abi, provider.getSigner());

    if (onSale) {
      await axios.post(
        "https://light-sea-server.herokuapp.com/api/v1/tx/close",
        {
          price,
          ca,
          tokenID,
        }
      );

      await contract.approve(
        "0x0000000000000000000000000000000000000000",
        parseInt(tokenID)
      );
    } else {
      await axios.post(
        "https://light-sea-server.herokuapp.com/api/v1/tx/sell",
        {
          price,
          ca,
          tokenID,
        }
      );

      await contract.approve(
        "0xEb42394Da7D7C1Bf3C25ad7b9B6F332a8dF9C511",
        parseInt(tokenID)
      );

      setPrice((prev) => 0);
    }
  };

  return (
    <>
      <Top>
        <ButtonTop onClick={handleClick}>
          <LogoWrapper>
            <AccountBalanceWallet />
          </LogoWrapper>
          {onSale ? "Close Trade" : "Sell"}
        </ButtonTop>
      </Top>
      <Bottom>
        {onSale ? null : (
          <input
            className={styles.price}
            type="text"
            value={price}
            onChange={handlePrice}
          />
        )}
      </Bottom>
    </>
  );
};

export default NADCTradeButtonOwner;
