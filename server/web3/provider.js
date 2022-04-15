import { ethers } from "ethers";
import { config } from "dotenv";
import axios from "axios";
config();

let provider;

const web3Init = () => {
  provider = new ethers.providers.InfuraProvider(
    "ropsten",
    process.env.INFURA_API_KEY
  );
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

  try {
    const contract = new ethers.Contract(address, abi, provider);
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

  return result;
};

export { web3Init, getBalance, getContractData };
