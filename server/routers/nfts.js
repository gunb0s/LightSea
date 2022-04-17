import express from "express";
import {
  getNFTMetadataURI as getNFTMetadataURIFromDB,
  getNFTMetadata as getNFTMetadataFROMDB,
  searchTokenDataWithName,
} from "../db/db.js";

const router = express.Router();

const getNFTs = async (req, res) => {
  const URIs = await getNFTMetadataURIFromDB();
  if (URIs.length === 0) res.send("no result");
  else {
    const result = await getNFTMetadataFROMDB(URIs);
    res.send(result);
  }
};

router.get("/", getNFTs);
router.get("/:search", async (req, res) => {
  const result = await searchTokenDataWithName(req.params.search);

  res.send(result);
});

export default router;
