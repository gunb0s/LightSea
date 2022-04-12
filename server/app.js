import express from 'express';
import cors from 'cors';
import { default as mongodb } from 'mongodb';
import dotenv from 'dotenv';

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
      db = client.db('STORAGE');
      app.listen(process.env.PORT || 8000, () => {
        console.log('Conneted DB!! Running Port');
      });
    }
  }
);

const data = {
  name: '',
  external: '',
  description: '',
  chain: '',
  type: '',
  image: '',
};

function inputData(
  name,
  external,
  description,
  chain,
  type,
  image,
  sale,
  price
) {
  data.name = name;
  data.external = external;
  data.description = description;
  data.chain = chain;
  data.type = type;
  data.image = image;
  data.sale = sale;
  data.price = price;
}

app.post('/create', (req, res) => {
  const account = req.body.account;
  const tokenId = req.body.tokenId;

  inputData(
    req.body.name,
    req.body.external,
    req.body.description,
    req.body.chain,
    req.body.type,
    req.body.image,
    req.body.sale,
    req.body.price
  );

  if (account !== undefined) {
    db.collection('NFTPOST')
      .find({ account: account })
      .toArray((err, result) => {
        if (result[0] !== undefined) {
          db.collection('NFTPOST').update(
            { account: account },
            { $push: { tokenIds: { tokenId: tokenId, type: input.type } } }
          );
          db.collection('Types').insertOne({
            type: input.type,
            data: { account: account, tokenId: tokenId, metadata: input },
          });
        } else {
          db.collection('NFTPOST').insertOne(
            {
              account: account,
              tokenIds: [{ tokenId: tokenId, type: input.type }],
            },
            (err, result) => {
              console.log(result);
            }
          );
          db.collection('Types').insertOne({
            type: input.type,
            data: { account: account, tokenId: tokenId, metadata: input },
          });
        }
      });
  }
  res.send('success');
});

app.get('/erc721/:tokenId', (req, res) => {
  let tokenId = req.params.tokenId;
  console.log(tokenId);

  db.collection('Types')
    .find({ 'data.tokenId': tokenId })
    .toArray((error, result) => {
      console.log(result);
      if (error) console.log(error);
      if (result) {
        res.send(result[0].data.metadata);
      }
    });
  res.send('loading fail');
});

function deleteSeller(seller, tokenId) {
  db.collection('NFTPOST').update(
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
  db.collection('Types').update(
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
    db.collection('NFTPOST')
      .find({ account: buyer })
      .toArray((error, result) => {
        if (result[0] !== undefined) {
          deleteSeller(seller, tokenId);
          changeOwner(seller, buyer);
          db.collection('NFTPOST').update(
            { account: buyer },
            { $push: { tokenIds: { tokenId: Number(tokenId), type: type } } }
          );
        } else {
          deleteSeller(seller, tokenId);
          changeOwner(seller, buyer);
          db.collection('NFTPOST').insertOne(
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

app.get('/Main', (req, res) => {
  db.collection('Types')
    .find({})
    .toArray((err, result) => {
      console.log(result[0].data.tokenId);
      res.send(result);
    });
});

app.post('/mypage', (req, res) => {
  const account = req.body.account;

  console.log(account);

  const change = account.toLowerCase();
  console.log(change);

  const mypageData = [];
  db.collection('NFTPOST')
    .find({ account: change })
    .toArray((err, result) => {
      if (result[0] !== undefined) {
        for (let i = 0; i < result[0].tokenIds.length; i++) {
          mypageData.push(result[0].tokenIds[i].tokenId);
        }

        const sendData = [];

        for (let i = 0; i < mypageData.length; i++) {
          db.collection('Types')
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
