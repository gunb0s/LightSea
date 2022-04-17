import React, { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";
import { Context } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
`;

const Main = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ABI = styled.textarea.attrs((props) => ({
  value: props.abi,
  placeholder: "your abi...",
  onChange: props.change,
}))`
  resize: none;
  outline: none;
  margin-top: 3rem;
  margin-bottom: 3rem;

  width: 40%;
  height: 50%;
`;

const Button = styled.button.attrs((props) => ({
  onClick: props.click,
}))`
  color: white;
  font-family: "Englisgh Gilroy-ExtraBold";
  padding: 1rem 3rem;
  background-color: rgb(35, 39, 40);
`;

const Register = () => {
  const navigate = useNavigate();
  const address = useContext(Context).address;
  const [contractAddress, setContractAddress] = useState("");
  const [abi, setAbi] = useState("");

  const handleAddressChange = (e) => {
    setContractAddress(e.target.value);
  };

  const handleAbiChange = (e) => {
    setAbi(e.target.value);
  };

  const handleClick = async () => {
    if (contractAddress === "" || abi === "") return;

    const result = await axios.post(
      "https://light-sea-server.herokuapp.com/api/v1/register",
      {
        contractAddress,
        abi,
      }
    );

    setContractAddress((prev) => "");
    setAbi((prev) => "");
    alert(result.data);
  };

  useEffect(() => {
    if (address === "") {
      navigate("/");
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(35, 39, 40)",
        height: "100vh",
      }}
    >
      <Navigation />
      <Container>
        <Main>
          <input
            type="text"
            placeholder="enter contract address..."
            value={contractAddress}
            onChange={handleAddressChange}
            style={{
              outline: "none",
            }}
          />
          <ABI abi={abi} change={handleAbiChange}></ABI>
          <Button click={handleClick}>Register</Button>
        </Main>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
