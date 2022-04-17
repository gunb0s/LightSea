import express from "express";
import { getSpecificContract } from "../db/db.js";

const router = express.Router();

router.get("/:ca", async (req, res) => {
  const { ca } = req.params;

  const { abi } = await getSpecificContract(ca);
  res.send({
    abi,
  });
});

export default router;
