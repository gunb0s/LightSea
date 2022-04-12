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

const NFTCard = ({ idx }) => {
  const navigate = useNavigate();
  const onCardLinkClik = () => {
    navigate("/assets/0x1");
  };

  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={`sampleImage/N${101 + idx}.png`} />
      <Card.Body>
        <Card.Title>Collection Name</Card.Title>
        <Card.Text>NFT Name</Card.Text>
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
        <Card.Link onClick={onCardLinkClik}>Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NFTCard;
