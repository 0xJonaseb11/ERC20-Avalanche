require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
  },
  networks: {
    hardhat: {},
    avalanche: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      blockExplorerUrls: "https://testnet.snowtrace.io/",
      
      accounts: [`0x${process.env.PRIVATE_KEY}`],
 
      chainId: "0xA869",
      chainName: "Avalanche Testnet C-Chain",
      nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
   },
  },

};