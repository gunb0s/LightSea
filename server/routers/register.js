import express from "express";
import { getContractData } from "../web3/provider.js";
import { checkRegistered, regsiterToDB } from "../db/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  let { contractAddress, abi } = req.body;
  contractAddress = contractAddress.toLowerCase();

  const result = await checkRegistered(contractAddress);
  if (result) {
    res.send("Already Registred!");
    return;
  }

  try {
    abi = JSON.parse(abi);
    const result = await getContractData(contractAddress, abi);
    await regsiterToDB(result, contractAddress, abi);

    res.send("success");
  } catch (err) {
    res.send("address or abi is not corrected");
  }
});

export default router;
