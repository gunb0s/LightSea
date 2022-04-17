import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import NADCTradeButtonNotOwner from "./NADCTradeButtonNotOwner";
import NADCTradeButtonOwner from "./NADCTradeButtonOwner";

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

const ButtonContainer = styled.div`
  display: block;
  max-width: 420px;
`;

const NADCTrade = ({ owner, ca, tokenID, onSale, salesHistory }) => {
  const { address } = useContext(Context);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getPrice = async () => {
      const response = await axios.get(
        `https://light-sea-server.herokuapp.com/api/v1/sale/${ca}/${tokenID}`
      );

      const { price: priceFromDB } = response.data;
      setPrice((prev) => priceFromDB);
    };

    if (onSale) {
      getPrice();
    } else {
      return;
    }

    console.log("set");
  }, [price]);

  const renderButton = () => {
    if (address.toLowerCase() === owner) {
      if (onSale) {
        return (
          <NADCTradeButtonOwner
            onSale={onSale}
            ca={ca}
            owner={owner}
            tokenID={tokenID}
          />
        );
      } else {
        return (
          <NADCTradeButtonOwner
            onSale={onSale}
            ca={ca}
            owner={owner}
            tokenID={tokenID}
          />
        );
      }
    } else {
      if (onSale) {
        return (
          <NADCTradeButtonNotOwner
            onSale={onSale}
            ca={ca}
            owner={owner}
            tokenID={tokenID}
            price={price}
          />
        );
      } else {
        return (
          <NADCTradeButtonNotOwner
            onSale={onSale}
            ca={ca}
            owner={owner}
            tokenID={tokenID}
            price={price}
          />
        );
      }
    }
  };

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
              <Price>{onSale ? price : "Not on sale"}</Price>
            </PriceMain>
          </PriceContainer>
          <ButtonContainer>
            <div style={{ width: "100%", display: "contents" }}>
              {renderButton()}
            </div>
          </ButtonContainer>
        </Main>
      </Container>
    </div>
  );
};

export default NADCTrade;
