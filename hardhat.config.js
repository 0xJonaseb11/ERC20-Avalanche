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

      chainId: "0xA869",
      chainName: "Avalanche Testnet C-Chain",
      nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,

      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  }

};
export const AVALANCHE_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Avalanche Testnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
};
