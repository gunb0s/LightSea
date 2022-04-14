import express from "express";

const router = express.Router();

// 특정 값 삭제, 특정 계정에 값 옮기기
function deleteSeller(seller, tokenId) {
  db.collection("contract").update(
    {
      account: seller,
    },
    {
      $pull: {
        tokenIds: { tokenId: Number(tokenId) },
      },
    }
  );
}

function changeOwner(seller, buyer) {
  db.collection("tokenData").update(
    {
      "data.account": seller,
    },
    {
      $set: {
        "data.account": buyer,
      },
    }
  );
}

router.get("/buy", (req, res) => {
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

  res.send("success");
});

export default router;
