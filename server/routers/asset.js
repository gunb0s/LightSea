import express from "express";
import { getAsset as getAssetFromDB } from "../db/db.js";

const router = express.Router();

const getAsset = async (req, res) => {
  const { account, id } = req.params;
  const result = await getAssetFromDB(account, parseInt(id));
  res.send(result);
};

router.get("/:account/:id", getAsset);

export default router;

// 0x50F4fD022897fA10D04442d24D49B99C6f696D1D
