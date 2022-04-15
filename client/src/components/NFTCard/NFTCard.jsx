import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./NFTCard.module.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const EthPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: start;
  max-width: 13ch;
`;

const NFTCard = ({ nft }) => {
  const { contractAddress, metadata, metadataUrl, owner, tokenID } = nft;
  const navigate = useNavigate();
  const onCardLinkClik = () => {
    navigate(`/assets/${contractAddress}/${tokenID}`);
  };

  const CSS_cardLinkAnother = {
    marginLeft: "123px",
    fontWeight: "500",
    textDecoration: "none",
    color: "rgb(200,200,200)",
  };
  const CSS_cardLink = {
    fontWeight: "500",
    textDecoration: "none",
    color: "rgb(200,200,200)",
  };
  const CSS_CollectionName = {
    marginBottom: "2px",
    fontSize: "14px",
    wordBreak: "break-all",
  };
  const CSS_NFTAssetName = {
    paddingTop: "0",
    paddingBottom: "0",
    marginTop: "2px",
    marginBottom:"0",
    fontSize: "17px",
    fontWeight: "700",
    wordBreak: "break-all",
    whiteSpace: "normal",
  };

  const cardImage = {
    width: "100%",
    height: "300px",
  };

  let NFTMetadataDescription ='...';
  if(metadata.description.length>=53)
  {
    NFTMetadataDescription = metadata.description.slice(0,53).concat("...");
  }
  else{
    NFTMetadataDescription = metadata.description;
  }

  return (
    <Card className={styles.card}>
      <Card.Img style={cardImage} variant="top" src={metadata.image} />
      <Card.Body>
        <Card.Title style={CSS_CollectionName}>LightSeaNFT [{tokenID}]</Card.Title>
        <Card.Text
          style={CSS_NFTAssetName}
        >{`${metadata.name}`}</Card.Text>
        <span style={{fontSize:"5px", marginTop:"0",paddingTop:"0",color:"rgb(200,200,200)",lineHeight:"3px"}}>{NFTMetadataDescription}</span>
      </Card.Body>
      <ListGroup className={`list-group-flush ${styles.list}`}>
        <ListGroupItem>Top Bid</ListGroupItem>
        <ListGroupItem>
          <EthPrice>
            <img
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
              alt="eth"
              style={{
                width: "14px",
                height: "14px",
              }}
            ></img>
            <div style={{ marginLeft: "0.3em" }}>100</div>
          </EthPrice>
        </ListGroupItem>
        <ListGroupItem>7 days left</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link style={CSS_cardLink} onClick={onCardLinkClik}>
          Card Link
        </Card.Link>
        <Card.Link style={CSS_cardLinkAnother} href="#">
          External Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NFTCard;
