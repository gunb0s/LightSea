import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  margin: 0px;
  margin-top: 30px;
  overflow: auto;
  border-bottom: 1px solid rgb(229, 232, 235);

  & > li:nth-child(1) > a:after {
    transition: background-color 0.4s ease 0s;
    background-color: rgb(32, 129, 226);
    bottom: 0%;
    content: "";
    display: block;
    height: 4px;
    left: 0px;
    position: absolute;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const Menu = styled.a`
  position: relative;
  display: flex;
  padding: 20px 30px;
  width: 100%;
  border-radius: 10px;
  transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
  /* color: rgb(53, 56, 64); */
  color:rgb(230,230,230);
  /* background-color: rgb(255, 255, 255); */
  background-color:rgb(20,20,20);
  text-decoration: none;

  font-size: 16px;
  font-weight: 600;
`;

const ProfilePageNavbar = () => {
  return (
    <Container>
      <li>
        <Menu>Collected</Menu>
      </li>
      <li>
        <Menu>Created</Menu>
      </li>
      <li>
        <Menu>Favorited</Menu>
      </li>
      <li>
        <Menu>Activity</Menu>
      </li>
      <li>
        <Menu>Offers</Menu>
      </li>
    </Container>
  );
};

export default ProfilePageNavbar;
