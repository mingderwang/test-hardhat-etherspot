// 04-superfluid.ts

const SuperfluidSDK = require("@superfluid-finance/js-sdk");

import { web3 } from "hardhat";
const { Web3Provider } = require("@ethersproject/providers");
const provider = new Web3Provider(web3.currentProvider)

async function main() {

const sf = new SuperfluidSDK.Framework({
            ethers: provider,
            version: "v1", //"test"
            tokens: ["fDAI"]
        });


await sf.initialize()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
