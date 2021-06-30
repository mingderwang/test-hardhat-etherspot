// 04-superfluid.ts

const SuperfluidSDK = require("@superfluid-finance/js-sdk");
import { web3 } from "hardhat";
const { Web3Provider } = require("@ethersproject/providers");

async function main() {

const sf = new SuperfluidSDK.Framework({
            ethers: new Web3Provider(web3.currentProvider),
            version: "test",
        });

await sf.initialize()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
