import express from "express";
import {
  registerSaleStatus,
  closeSale,
  buy,
  getSpecificContract,
} from "../db/db.js";

import { trasfer } from "../web3/provider.js";

const router = express.Router();

// 특정 값 삭제, 특정 계정에 값 옮기기

router.post("/sell", async (req, res) => {
  const { price, ca, tokenID } = req.body;
  await registerSaleStatus(price, ca, tokenID);
  res.sendStatus(201);
});

router.post("/close", async (req, res) => {
  const { price, ca, tokenID } = req.body;
  await closeSale(price, ca, tokenID);
  res.sendStatus(201);
});

router.post("/buy", async (req, res) => {
  // TrasferEvent가 발생했을 때 이벤트 핸들러에서 해야할 일을
  // buy함수가 어느정도 해주고 있다. (수정 필요)
  const { price, ca, tokenID, owner, address: buyer } = req.body;
  await buy(price, ca, tokenID, owner, buyer);
  const { abi } = await getSpecificContract(ca);
  await trasfer(ca, abi, owner, buyer, tokenID);
  res.sendStatus(201);
});

export default router;

//   const buyer = req.body.buyer.toLowerCase();
//   const seller = req.body.seller.toLowerCase();
//   const tokenId = req.body.tokenId;
//   const type = req.body.type;

//   if (buyer !== undefined) {
//     db.collection("contract")
//       .find({ account: buyer })
//       .toArray((error, result) => {
//         if (result[0] !== undefined) {
//           deleteSeller(seller, tokenId);
//           changeOwner(seller, buyer);
//           db.collection("contract").update(
//             { account: buyer },
//             { $push: { tokenIds: { tokenId: Number(tokenId), type: type } } }
//           );
//         } else {
//           deleteSeller(seller, tokenId);
//           changeOwner(seller, buyer);
//           db.collection("contract").insertOne(
//             {
//               account: buyer,
//               tokenIds: [{ tokenId: Number(tokenId), type: type }],
//             },
//             (error, result) => {
//               console.log(result);
//             }
//           );
//         }
//       });
//   }
