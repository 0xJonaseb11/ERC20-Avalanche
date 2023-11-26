
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const MyCrypto = ethers.getContractFactory("MyCrypto");
  const mycrypto = await MyCrypto.deploy();

  // await MyCrypto.deployed();

  console.log("Deploying MyCrypto to:", mycrypto.address);
  
}

const runMain = async() =>{
  try {
    await main();
    process.exit(0)  
  } catch(error) {
    console.error("Error while deploying Token:",error);
    process.exit(1);
  }
}

runMain();

