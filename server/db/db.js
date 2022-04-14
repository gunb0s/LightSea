import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const URL = `mongodb+srv://Lightsea:${process.env.DB_PASSWORD}@lightseadb.35jin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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

export { dbConnect, getNFTMetadataURI, getNFTMetadata, getAccount, getAsset };
