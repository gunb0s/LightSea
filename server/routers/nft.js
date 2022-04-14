import express from "express";

const router = express.Router();

const getNFTs = async (req, res) => {
  res.send("nfts");
};

router.get("/", getNFTs);

export default router;
