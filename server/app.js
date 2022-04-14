import express from 'express';
import cors from 'cors';
import { default as mongodb } from 'mongodb';
import dotenv from 'dotenv';
// import projectContractList from '../Resource/jsondata/contract.json'

dotenv.config();

const MongoClient = mongodb.MongoClient;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let db;

MongoClient.connect(
  'mongodb+srv://Lightsea:lightsea@lightseadb.35jin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  (err, client) => {
    if (err) {
      console.log(err);
    } else {
      db = client.db('NFTSTORAGE');
      app.listen(process.env.PORT || 8000, () => {
        console.log('Connected DB!! Running Port');
      });
    }
  }
);

const data = {
  id: '',
  name: '',
  external: '',
  description: '',
  image: '',
  sale: '',
  price: ''
};

function inputData(
  tokenId,
  name,
  external,
  description,
  image,
  sale,
  price
) {
  data.id = tokenId;
  data.name = name;
  data.external = external;
  data.description = description;
  data.image = image;
  data.sale = sale;
  data.price = price;
}

// create할때,,
app.post('/create', (req, res) => {
  // 프론트에서 받은 데이터
  const account = req.body.account;
  const tokenId = req.body.tokenId;

  inputData(
    req.body.name,
    req.body.external,
    req.body.description,
    req.body.image,
    req.body.sale,
    req.body.price
  );

// contract 객체 구하기

// db에 저장되어있으면 update 새로운 사람이면 insertOne
  if (account !== undefined) {
    db.collection('contract')
      .find({ account: account })
      .toArray((err, result) => {
        if (result[0] !== undefined) {
          db.collection('contract').update(
            { account: account }, // db에 이미 저장돼있으면 추가해주는
            { $push: { metadataURI: "컨트랙트 주소를 넣어줄게용"} } //컨트랙트주소만 넣으면 될둡? 
          ); 
          db.collection('tokenData').insertOne({
            tokenId: tokenId,
            metadataURI: [],
            metadata: { name: data.name, description: data.description, image: data.image, sale: data.sale, price: data.price },
            contractAddress: '컨트랙트 주소', // 값 넣어주기,,
            owner: account
          });
        } else {
          db.collection('contract').insertOne( // 새로 저장
            {
              account: account,
              metadataURI: [{ tokenId: tokenId, type: data.type }],
            },
            (err, result) => {
              console.log("===>>>" + result);
            }
          );
          db.collection('tokenData').insertOne({
            tokenId: tokenId,
            metadataURI: [],
            metadata: { name: data.name, description: data.description, image: data.image, sale: data.sale, price: data.price },
            contractAddress: '컨트랙트 주소',
            owner: account
          });
        }
      });
  }
  res.send('success');
});

// explore
app.get('/explore', (req, res) => {
  db.collection('tokenData')
    .find() // find({}) 일 필요가 있남..?
    .toArray((err, result) => {
      if (err) console.log('OMG!!!! ===>>>', err);
      if (result) {
        console.log(result.metadata)
      }
    })
})

// 해당 유저 주소에 해당 토큰 아이디! > 유저의 nft 데이터
app.get('/:account', (req, res) => {
  let account = req.params.account;

  db.collection('contract')
    .find({ 'account': account })
    .toArray((err, result) => {
      if (err) console.log('OMG!!!! ===>>>', err);
      if (result) {
        console.log(result);
        res.send(result.metadataURI);
      }
    });
});

// 해당 컨트랙트에 토큰아이디 > nft 상세페이지
app.get("/asset/:contraact/:tokenId", (req, res)=>{
  let tokenId = req.params.tokenId;

  db.collection('tokenData')
    .find({ 'tokenId': tokenId })
    .toArray((err, result) => {
      if (err) console.log('OMG!!!! ===>>>', err);
      if (result) {
        console.log(result)
        res.send(result.metadata)
      }
    })
})

// 특정 값 삭제, 특정 계정에 값 옮기기
function deleteSeller(seller, tokenId) {
  db.collection('contract').update(
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
  db.collection('tokenData').update(
    {
      'data.account': seller,
    },
    {
      $set: {
        'data.account': buyer,
      },
    }
  );
}

app.post('/buy', (req, res) => {
  const buyer = req.body.buyer.toLowerCase();
  const seller = req.body.seller.toLowerCase();
  const tokenId = req.body.tokenId;
  const type = req.body.type;

  if (buyer !== undefined) {
    db.collection('contract')
      .find({ account: buyer })
      .toArray((error, result) => {
        if (result[0] !== undefined) {
          deleteSeller(seller, tokenId);
          changeOwner(seller, buyer);
          db.collection('contract').update(
            { account: buyer },
            { $push: { tokenIds: { tokenId: Number(tokenId), type: type } } }
          );
        } else {
          deleteSeller(seller, tokenId);
          changeOwner(seller, buyer);
          db.collection('contract').insertOne(
            {
              account: buyer,
              tokenIds: [{ tokenId: Number(tokenId), type: type }],
            },
            (error, result) => {
              console.log(result);
            }
          );
        }
      });
  }

  res.send('success');
});

app.post('/mypage', (req, res) => {
  const account = req.body.account;

  console.log(account);

  const change = account.toLowerCase();
  console.log(change);

  const mypageData = [];
  db.collection('contract')
    .find({ account: change })
    .toArray((err, result) => {
      if (result[0] !== undefined) {
        for (let i = 0; i < result[0].tokenIds.length; i++) {
          mypageData.push(result[0].tokenIds[i].tokenId);
        }

        const sendData = [];

        for (let i = 0; i < mypageData.length; i++) {
          db.collection('tokenData')
            .find({ 'data.tokenId': mypageData[i] })
            .toArray((err, result) => {
              sendData.push(...result);
            });
        }

        setTimeout(() => {
          res.send(sendData);
        }, 1000);
      } else {
        res.send([]);
      }
    });
});
