import React from "react";
import styled from "styled-components";

const Moon = styled.div`
  background-color: whitesmoke;
  width: 21px;
  height: 21px;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const Logo = () => {
  return <Moon></Moon>;
};

export default Logo;
