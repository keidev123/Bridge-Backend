import {  BNB_Event_Contract, ETH_ChainId, ETH_Send_Contract, ETHEREUM_tokenAddress } from "../constant";

export async function catchBridgeEvent() {
  console.log("bridge event start =======");

  try {
    BNB_Event_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 BSC Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      if (chainId == ETH_ChainId) {
        try {
          console.log("====== start sendtoken in bsc contract ======");
          console.log("Sending token with params:");
          console.log("- Token Address:", ETHEREUM_tokenAddress);
          console.log("- Recipient:", to);
          console.log("- Amount:", amount.toString());
          
          
          const tx = await ETH_Send_Contract.sendToken(ETHEREUM_tokenAddress, to, amount);
          console.log("Transaction sent:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction confirmed:", receipt.hash);
          console.log("Gas used:", receipt.gasUsed.toString());
        } catch(err: any) {
          console.log("sendtoken by ETH_Contract from BSC contract error ==> ", err);
          if (err.data) {
            console.log("Error data:", err.data);
          }
          if (err.transaction) {
            console.log("Failed transaction:", err.transaction);
          }
        }
      }
    });
  } catch (err) {
    console.log("BSC contranct event error ==>", err);
  }

//   try {
//     BASE_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
//       console.log("📦 BASE Bridge Event Detected");
//       console.log("Token Address:", tokenAddress);
//       console.log("From:", from);
//       console.log("To:", to);
//       console.log("Amount:", amount.toString());
//       console.log("Destination Chain ID:", chainId.toString());

//       await BASE_Contract.sendToken(tokenAddress,)
//     });
//   } catch (err) {
//     console.log("BASE contranct event error ==>", err);
//   }

//   try {
//     ETH_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
//       console.log("📦 ETH Bridge Event Detected");
//       console.log("Token Address:", tokenAddress);
//       console.log("From:", from);
//       console.log("To:", to);
//       console.log("Amount:", amount.toString());
//       console.log("Destination Chain ID:", chainId.toString());

//       await ETH_Contract.sendToken(tokenAddress,)
//     });
//   } catch (err) {
//     console.log("ETH contranct event error ==>", err);
//   }
}