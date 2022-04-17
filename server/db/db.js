import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

// const URL = `mongodb+srv://Lightsea:${process.env.DB_PASSWORD}@lightseadb.35jin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URL =
  "mongodb+srv://gunbos:gunbos@cluster0.zns0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db;
let mongoClient;

const dbConnect = async () => {
  try {
    mongoClient = new MongoClient(URL);
    console.log("Connected DB!! Running Port");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    db = mongoClient.db("LightSeaStorage");
    return MongoClient;
  } catch (err) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
};

// explore
const getNFTMetadataURI = async () => {
  let result;
  let resultArr = [];
  try {
    result = await db
      .collection("contract")
      .find() // find({}) 일 필요가 있남..?
      .toArray();
  } catch (err) {
    console.log("OMG!!!! ===>>>", err);
  }

  if (result.length === 0) return result;
  for (let arr of result) {
    let { metadataUrls } = arr;
    resultArr.push(...metadataUrls);
  }

  if (resultArr.length >= 16) {
    const shulffle = (arr) => {
      arr.sort(() => Math.random - 0.5);
    };
    shulffle(resultArr);
    return resultArr.slice(0, 16);
  } else {
    return resultArr;
  }
};

const getNFTMetadata = async (metadataURIs) => {
  const result = [];
  for (let uri of metadataURIs) {
    const data = await db
      .collection("tokenData")
      .find({ metadataUrl: uri })
      .toArray();
    result.push(data[0]);
  }
  return result;
};

const getAccount = async (address) => {
  let result;
  try {
    result = await db
      .collection("tokenData")
      .find({ owner: address })
      .toArray();
  } catch (err) {
    console.log("OMG!!!! ===>>>", err);
  }

  return result;
};

const getAsset = async (account, id) => {
  let result;
  try {
    result = await db
      .collection("tokenData")
      .find({ contractAddress: account, tokenID: parseInt(id) })
      .toArray();
  } catch (err) {
    console.log("OMG!!!! ===>>>", err);
  }

  return result[0];
};

const checkRegistered = async (address) => {
  const result = await db
    .collection("contract")
    .find({ contract: address })
    .toArray();

  if (result.length === 0) {
    return false;
  } else {
    return true;
  }
};

const regsiterToDB = async (data, address, abi) => {
  const { metadataUrls, tokenData } = data;

  try {
    await db.collection("contract").insertOne({
      contract: address,
      metadataUrls,
      abi,
    });

    for (let datum of tokenData) {
      await db.collection("tokenData").insertOne(datum);
    }
  } catch (err) {
    throw new Error(err);
  }
};

const getContractData = async () => {
  const result = await db.collection("contract").find().toArray();
  return result;
};

const getSpecificContract = async (address) => {
  const result = await db
    .collection("contract")
    .find({ contract: address.toLowerCase() })
    .toArray();
  return result[0];
};

const setMint = async (contract, to, tokenID, metadataUrl, data) => {
  await db.collection("contract").updateOne(
    {
      contract: contract.toLowerCase(),
    },
    {
      $push: {
        metadataUrls: metadataUrl,
      },
    }
  );

  const DBdata = {
    contractAddress: contract.toLowerCase(),
    owner: to.toLowerCase(),
    tokenID: parseInt(tokenID),
    metadataUrl,
    metadata: data,
    onSale: false,
    salesHistory: [],
  };
  await db.collection("tokenData").insertOne(DBdata);
};

const updateTokenData = async (contract, from, to, tokenID) => {
  await db.collection("tokenData").updateOne(
    {
      contractAddress: contract.toLowerCase(),
      owner: from.toLowerCase(),
      tokenID,
    },
    {
      $set: {
        owner: to.toLowerCase(),
      },
    }
  );
};

const registerSaleStatus = async (price, ca, tokenID) => {
  await db.collection("tokenData").updateOne(
    {
      contractAddress: ca.toLowerCase(),
      tokenID: parseInt(tokenID),
    },
    { $set: { onSale: true } }
  );

  await db.collection("saleStatus").insertOne({
    contractAddress: ca.toLowerCase(),
    tokenID: parseInt(tokenID),
    price,
  });
};

const closeSale = async (price, ca, tokenID) => {
  await db.collection("tokenData").updateOne(
    {
      contractAddress: ca.toLowerCase(),
      tokenID: parseInt(tokenID),
    },
    { $set: { onSale: false } }
  );

  await db.collection("saleStatus").deleteOne({
    contractAddress: ca.toLowerCase(),
    tokenID: parseInt(tokenID),
  });
};

const buy = async (price, ca, tokenID, owner, buyer) => {
  await db.collection("tokenData").updateOne(
    {
      contractAddress: ca.toLowerCase(),
      tokenID: parseInt(tokenID),
    },
    {
      $set: {
        onSale: false,
      },
    }
  );

  await db.collection("tokenData").updateOne(
    {
      contractAddress: ca.toLowerCase(),
      tokenID: parseInt(tokenID),
    },
    {
      $push: {
        salesHistory: {
          price,
          date: Date.now(),
          from: owner.toLowerCase(),
          to: buyer.toLowerCase(),
        },
      },
    }
  );

  await db.collection("saleStatus").deleteOne({
    contractAddress: ca.toLowerCase(),
    tokenID: parseInt(tokenID),
  });
};

const getPrice = async (ca, tokenID) => {
  const result = await db
    .collection("saleStatus")
    .find({
      contractAddress: ca.toLowerCase(),
      tokenID: parseInt(tokenID),
    })
    .toArray();
  return result[0];
};

const searchTokenDataWithName = async (search) => {
  const result = await db
    .collection("tokenData")
    .find({
      "metadata.name": { $regex: `.*${search}.*` },
    })
    .toArray();

  return result;
};

export {
  dbConnect,
  getNFTMetadataURI,
  getNFTMetadata,
  getAccount,
  getAsset,
  checkRegistered,
  regsiterToDB,
  getContractData,
  getSpecificContract,
  setMint,
  updateTokenData,
  registerSaleStatus,
  getPrice,
  closeSale,
  buy,
  searchTokenDataWithName,
};
