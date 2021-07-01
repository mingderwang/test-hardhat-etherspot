// 04-signers.ts

import { ethers } from "hardhat";

async function main() {
   const a = await ethers.getSigners()
   console.log(a[0])
   const b = await ethers.getSigner("0x609683612D80A091C69747a76ec6efE284a7cf46")
   console.log(b)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
