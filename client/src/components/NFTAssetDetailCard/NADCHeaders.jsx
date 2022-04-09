import React from "react";
import styled from "styled-components";

const Header = styled.section`
  margin: 20px 20px 15px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  max-width: 100%;
`;

const CollectionDetail = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 420px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CollectionLink = styled.a`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(32, 129, 226);
  text-decoration: none;
`;

const CollectionTitle = styled.h1`
  width: 710px;
  font-size: 30px;
  font-weight: 600;
  max-width: 100%;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const NADCHeaders = () => {
  return (
    <Header>
      <CollectionInfo>
        <CollectionDetail>
          <CollectionLink>Pocketmon</CollectionLink>
        </CollectionDetail>
      </CollectionInfo>
      <CollectionTitle>Pocketmon 1</CollectionTitle>
    </Header>
  );
};

export default NADCHeaders;
