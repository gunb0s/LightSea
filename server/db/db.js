import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

// const URL = `mongodb+srv://Lightsea:${process.env.DB_PASSWORD}@lightseadb.35jin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URL =
  "mongodb+srv://gunbos:gunbos@cluster0.zns0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db;
let mongoClient;

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
  try {
    result = await db
      .collection("contract")
      .find() // find({}) 일 필요가 있남..?
      .toArray();
  } catch (err) {
    console.log("OMG!!!! ===>>>", err);
  }

  if (result.length === 0) return result;
  const { metadataUrls } = result[0];
  return metadataUrls;
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
      .find({ contractAddress: account, tokenID: id })
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

const setMint = async (contract, to, tokenID) => {
  await db.collection("contract").updateOne(
    {
      contract: contract.toLowerCase(),
    },
    {
      $push: {
        metadataUrls: "",
      },
    }
  );
  const data = {};
  await db.collection("tokenData").insertOne(data);
};

const updateTokenData = async (contract, from, to, tokenID) => {
  await db.collection("tokenData").updateOne(
    {
      contract: contract.toLowerCase(),
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

export {
  dbConnect,
  getNFTMetadataURI,
  getNFTMetadata,
  getAccount,
  getAsset,
  checkRegistered,
  regsiterToDB,
  getContractData,
  setMint,
  updateTokenData,
};
