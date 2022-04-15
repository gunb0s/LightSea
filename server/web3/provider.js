import { ethers } from "ethers";
import { config } from "dotenv";
import { getContractData as getContractDataFromDB } from "../db/db.js";
import axios from "axios";
config();

let provider;
let contracts = [];

const handleTransferEvent = (from, to, tokenID, event) => {
  if (from === "0x0000000000000000000000000000000000000000") {
    setMint(event.address, to, tokenID);
  } else {
    updateTokenData(event.address, from, to, tokenID);
  }
};

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

    // contractInstance.on("Transfer", handleTransferEvent);
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
  contracts.on("Transfer", handleTransferEvent);

  return result;
};

export { web3Init, getBalance, getContractData };
