import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config({ path: './.env'});

const ALCHEMY_API_KEY = process.env.Alchemy_api_key;
const PRIVATE_KEY = process.env.Private_key!;
const Etherscan_API_KEY = process.env.Etherscan_api_key;

const config: HardhatUserConfig = {
  solidity: "0.8.18",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
    }
  },

  etherscan: {
    apiKey: Etherscan_API_KEY,
  },
};

export default config;
