import express from "express";
import { getPrice } from "../db/db.js";

const router = express.Router();

router.get("/:ca/:tokenID", async (req, res) => {
  const { ca, tokenID } = req.params;

  const { price } = await getPrice(ca, tokenID);

  res.send({ price });
});

export default router;
