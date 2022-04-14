import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("create");
});

// create할때,,
router.post("/", (req, res) => {
  // 프론트에서 받은 데이터
  // const account = req.body.account;
  // const tokenId = req.body.tokenId;

  // inputData(
  //   req.body.name,
  //   req.body.external,
  //   req.body.description,
  //   req.body.image,
  //   req.body.sale,
  //   req.body.price
  // );

  // // contract 객체 구하기

  // // db에 저장되어있으면 update 새로운 사람이면 insertOne
  // if (account !== undefined) {
  //   db.collection("contract")
  //     .find({ account: account })
  //     .toArray((err, result) => {
  //       if (result[0] !== undefined) {
  //         db.collection("contract").update(
  //           { account: account }, // db에 이미 저장돼있으면 추가해주는
  //           { $push: { metadataURI: "컨트랙트 주소를 넣어줄게용" } } //컨트랙트주소만 넣으면 될둡?
  //         );
  //         db.collection("tokenData").insertOne({
  //           tokenId: tokenId,
  //           metadataURI: [],
  //           metadata: {
  //             name: data.name,
  //             description: data.description,
  //             image: data.image,
  //             sale: data.sale,
  //             price: data.price,
  //           },
  //           contractAddress: "컨트랙트 주소", // 값 넣어주기,,
  //           owner: account,
  //         });
  //       } else {
  //         db.collection("contract").insertOne(
  //           // 새로 저장
  //           {
  //             account: account,
  //             metadataURI: [{ tokenId: tokenId, type: data.type }],
  //           },
  //           (err, result) => {
  //             console.log("===>>>" + result);
  //           }
  //         );
  //         db.collection("tokenData").insertOne({
  //           tokenId: tokenId,
  //           metadataURI: [],
  //           metadata: {
  //             name: data.name,
  //             description: data.description,
  //             image: data.image,
  //             sale: data.sale,
  //             price: data.price,
  //           },
  //           contractAddress: "컨트랙트 주소",
  //           owner: account,
  //         });
  //       }
  //     });
  // }
  res.send("success");
});

export default router;
