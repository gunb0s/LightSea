import { ethers } from "ethers";
import { config } from "dotenv";
import {
  getContractData as getContractDataFromDB,
  getSpecificContract,
  setMint,
  updateTokenData,
} from "../db/db.js";
import axios from "axios";
config();

let provider;
let contracts = [];

const web3Init = async () => {
  provider = new ethers.providers.InfuraProvider(
    "ropsten",
    process.env.INFURA_API_KEY
  );

  const contractData = await getContractDataFromDB();

  for (let data of contractData) {
    const { contract, abi } = data;
    let contractInstance = new ethers.Contract(contract, abi, provider);
    contracts.push(contractInstance);

    contractInstance.on("Transfer", handleTransferEvent);
  }

  console.log(contracts.length);
};

const trasfer = async (ca, abi, owner, buyer, tokenID) => {
  const wallet = new ethers.Wallet(
    "dc79fff6e9bed0cd11c8e2ddc4dac8eb73bca36cbcc6a5b1aade153ebdc72382",
    provider
  );

  const signer = wallet.connect(provider);
  const contract = new ethers.Contract(ca, abi, signer);

  await contract.transferFrom(owner, buyer, tokenID);
};

const handleTransferEvent = async (from, to, tokenID, event) => {
  let tokenIDtoInt = tokenID.toNumber();

  const { contract, abi } = await getSpecificContract(event.address);
  let contractInstance = new ethers.Contract(contract, abi, provider);

  let metadataUrl = await contractInstance.tokenURI(tokenIDtoInt);
  let { data } = await axios.get(metadataUrl);

  if (from === "0x0000000000000000000000000000000000000000") {
    await setMint(event.address, to, tokenIDtoInt, metadataUrl, data);
    console.log("Minting Succeed");
  } else {
    await updateTokenData(event.address, from, to, tokenIDtoInt);
    console.log("Tx Succeed");
  }
};

const getBalance = async (address) => {
  try {
    const bigNums = await provider.getBalance(address);
    return ethers.utils.formatEther(bigNums);
  } catch (err) {
    console.log("OMG!!!! ===>>>", err);
  }
};

const getContractData = async (address, abi) => {
  let result = {
    metadataUrls: [],
    tokenData: [],
  };
  let contract;
  try {
    contract = new ethers.Contract(address, abi, provider);
    let tokenID = 1;
    while (true) {
      try {
        let metadataUrl = await contract.tokenURI(tokenID);
        let owner = await contract.ownerOf(tokenID);
        let { data } = await axios.get(metadataUrl);

        let DBdata = {
          tokenID,
          metadataUrl,
          owner: owner.toLowerCase(),
          contractAddress: address,
          metadata: data,
          onSale: false,
          salesHistory: [],
        };

        result.metadataUrls.push(metadataUrl);
        result.tokenData.push(DBdata);
        tokenID++;
      } catch (err) {
        break;
      }
    }
  } catch (err) {
    throw new Error(err);
  }
  contracts.push(contract);
  contract.on("Transfer", handleTransferEvent);
  return result;
};

export { web3Init, getBalance, getContractData, trasfer };
