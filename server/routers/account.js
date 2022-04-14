import express from "express";
// import {
//   getNFTMetadataURI as getNFTMetadataURIFromDB,
//   getNFTMetadata as getNFTMetadataFROMDB,
// } from "../db/db.js";

const router = express.Router();

const getAccount = async (req, res) => {
  res.send("account");
};

router.get("/:address", getAccount);

export default router;

//0x8432aa95BA718686FD38d8599fC68A281B9a933F
