require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


const ALCHEMY_URL = process.env.ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId:31337,
      gas: 2100000, 
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true
    },
    sepolia: {
      url: ALCHEMY_URL,
      accounts: [ PRIVATE_KEY ]
    }
  },
  defaultNetwork: "hardhat",
  solidity: "0.8.17",
};
