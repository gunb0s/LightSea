import express from "express";
import { getAccount as getAccountFromDB } from "../db/db.js";

const router = express.Router();

const getAccount = async (req, res) => {
  const { address } = req.params;
  const result = await getAccountFromDB(address);
  res.send(result);
};

router.get("/:address", getAccount);

export default router;

//0xCb257F81a50AB3cd480E0097a671329012A1999b
