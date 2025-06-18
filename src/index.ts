import { BASE_ChainId, BASE_Contract, BASE_tokenAddress, BNB_Contract, ETH_ChainId, ETH_Contract, ETHEREUM_tokenAddress } from "../constant";



export async function catchBridgeEvent() {
  console.log("bridge event start =======");

  try {
    BNB_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 BSC Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      if ( chainId == BASE_ChainId ) {
          try {
              await BASE_Contract.sendToken(BASE_tokenAddress, from, amount)

          } catch(err) {
            console.log("sendtoken by BASE_Contract from BSC contract error ==> ", err)
          }
      }

      if ( chainId == ETH_ChainId ) {
          try {
            console.log("====== start sendtoken in bsc contract ======")
              await ETH_Contract.sendToken(ETHEREUM_tokenAddress, from, amount)

          } catch(err) {
            console.log("sendtoken by ETH_Contract from BSC contract error ==> ", err)
          }
      }
    });
  } catch (err) {
    console.log("BSC contranct event error ==>", err);
  }

  try {
    BASE_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 BASE Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      await BASE_Contract.sendToken(tokenAddress,)
    });
  } catch (err) {
    console.log("BASE contranct event error ==>", err);
  }

  try {
    ETH_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 ETH Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      await ETH_Contract.sendToken(tokenAddress,)
    });
  } catch (err) {
    console.log("ETH contranct event error ==>", err);
  }
}
