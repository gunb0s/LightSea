import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./routers/index.js";
import { dbConnect } from "./db/db.js";
import { web3Init } from "./web3/provider.js";
// import projectContractList from '../Resource/jsondata/contract.json'

const PORT = 8000;

const app = express();

app.use(
  morgan("      :method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", indexRouter);

app.listen(PORT, () => {
  dbConnect();
  web3Init();
  console.log(`Listening to PORT: ${PORT}...`);
});
// app.post("/mypage", (req, res) => {
//   const account = req.body.account;

//   console.log(account);

//   const change = account.toLowerCase();
//   console.log(change);

//   const mypageData = [];
//   db.collection("contract")
//     .find({ account: change })
//     .toArray((err, result) => {
//       if (result[0] !== undefined) {
//         for (let i = 0; i < result[0].tokenIds.length; i++) {
//           mypageData.push(result[0].tokenIds[i].tokenId);
//         }

//         const sendData = [];

//         for (let i = 0; i < mypageData.length; i++) {
//           db.collection("tokenData")
//             .find({ "data.tokenId": mypageData[i] })
//             .toArray((err, result) => {
//               sendData.push(...result);
//             });
//         }

//         setTimeout(() => {
//           res.send(sendData);
//         }, 1000);
//       } else {
//         res.send([]);
//       }
//     });
// });
