import express from "express";
import { getBalance } from "../web3/provider.js";

const router = express.Router();

router.get("/:address", async (req, res) => {
  const address = req.params.address;
  const balance = await getBalance(address);
  res.send(balance);
});

export default router;

// 0x4A0cda646eE406fB5C69C863DFFd0fC67De2A6A1
