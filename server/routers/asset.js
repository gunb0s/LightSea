import express from "express";

const router = express.Router();

const getAsset = async (req, res) => {
  res.send("asset");
};

router.get("/:account/:id", getAsset);

export default router;

// 0x50F4fD022897fA10D04442d24D49B99C6f696D1D
