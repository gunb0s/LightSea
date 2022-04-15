import { ethers } from "ethers";
import { config } from "dotenv";
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

export { web3Init, getBalance };
