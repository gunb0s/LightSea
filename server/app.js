import express from "express";
import cors from "cors";
import { default as mongodb } from "mongodb";
import dotenv from "dotenv";
import morgan from "morgan";
import indexRouter from "./routers/index.js";
// import projectContractList from '../Resource/jsondata/contract.json'

dotenv.config();

const MongoClient = mongodb.MongoClient;
const app = express();

app.use(
  morgan("      :method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", indexRouter);

let db;

MongoClient.connect(
  `mongodb+srv://Lightsea:${process.env.DB_PASSWORD}@lightseadb.35jin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  (err, client) => {
    if (err) {
      console.log(err);
    } else {
      db = client.db("LightSeaStorage");
      app.listen(process.env.PORT || 8000, () => {
        console.log("Connected DB!! Running Port");
      });
    }
  }
);

const data = {
  id: "",
  name: "",
  external: "",
  description: "",
  image: "",
  sale: "",
  price: "",
};

function inputData(tokenId, name, external, description, image, sale, price) {
  data.id = tokenId;
  data.name = name;
  data.external = external;
  data.description = description;
  data.image = image;
  data.sale = sale;
  data.price = price;
}

// explore
app.get("/explore", (req, res) => {
  db.collection("tokenData")
    .find() // find({}) 일 필요가 있남..?
    .toArray((err, result) => {
      if (err) console.log("OMG!!!! ===>>>", err);
      if (result) {
        console.log(result.metadata);
      }
    });
});

// 해당 유저 주소에 해당 토큰 아이디! > 유저의 nft 데이터
app.get("/:account", (req, res) => {
  let account = req.params.account;

  db.collection("contract")
    .find({ account: account })
    .toArray((err, result) => {
      if (err) console.log("OMG!!!! ===>>>", err);
      if (result) {
        console.log(result);
        res.send(result.metadataURI);
      }
    });
});

// 해당 컨트랙트에 토큰아이디 > nft 상세페이지
app.get("/asset/:contraact/:tokenId", (req, res) => {
  let tokenId = req.params.tokenId;

  db.collection("tokenData")
    .find({ tokenId: tokenId })
    .toArray((err, result) => {
      if (err) console.log("OMG!!!! ===>>>", err);
      if (result) {
        console.log(result);
        res.send(result.metadata);
      }
    });
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
