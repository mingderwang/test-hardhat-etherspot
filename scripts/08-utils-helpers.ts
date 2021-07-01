// 08-utils-helpers.ts

import { ethers } from "hardhat";

const {
  toWad,
  toBN,
  fromWad,
  wad4human
} = require("@decentral.ee/web3-helpers");

const helpers = require("@decentral.ee/web3-helpers");

async function main() {
console.log(helpers)
// default ethers utils
console.log(ethers.utils)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
