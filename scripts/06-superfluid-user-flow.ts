// 04-superfluid.ts

const SuperfluidSDK = require("@superfluid-finance/js-sdk");

import { ethers, web3 } from "hardhat";
const { Web3Provider } = require("@ethersproject/providers");
const provider = new Web3Provider(web3.currentProvider)

async function main() {
const signers = await ethers.getSigners()
const signer = await ethers.getSigner(signers[0].address)

const sf = new SuperfluidSDK.Framework({
            ethers: provider,
            version: "v1", //"test"
            tokens: ["fDAI"]
        });


await sf.initialize()
const bob = sf.user({ address: signer.address, token: sf.tokens.fDAIx.address });

console.log(bob)
// bob flow to  0x5842d94A698d625857993859ac5b380dC3e5C3eA
const alice = "0x5842d94A698d625857993859ac5b380dC3e5C3eA"
await bob.flow({
    recipient: alice,
    flowRate: "38580246913580" // 100 tokens / mo
});

const details = await bob.details();
console.log(details);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
