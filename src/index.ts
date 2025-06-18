import {  BASE_ChainId, BASE_EVENT_Contract, BASE_Send_Contract, BASE_tokenAddress, BNB_ChainId, BNB_Event_Contract, BNB_Send_Contract, BNB_tokenAddress, ETH_ChainId, ETH_Event_Contract, ETH_Send_Contract, ETHEREUM_tokenAddress } from "../constant";

export async function catchBridgeEvent() {
  console.log("bridge event start =======");


  // From BSC chain to ETH or BASE chain
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
      if (chainId == BASE_ChainId) {
        try {
          console.log("====== start sendtoken in base contract ======");
          console.log("Sending token with params:");
          console.log("- Token Address:", BASE_tokenAddress);
          console.log("- Recipient:", to);
          console.log("- Amount:", amount.toString());
          
          
          const tx = await BASE_Send_Contract.sendToken(BASE_tokenAddress, to, amount);
          console.log("Transaction sent:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction confirmed:", receipt.hash);
          console.log("Gas used:", receipt.gasUsed.toString());
        } catch(err: any) {
          console.log("sendtoken from BSC contract to base error ==> ", err);
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

  // From ETH chain to BSC or BASE chain
  try {
    ETH_Event_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 ETHEREUM Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      if (chainId == BNB_ChainId) {
        try {
          console.log("====== start sendtoken in BSC contract ======");
          console.log("Sending token with params:");
          console.log("- Token Address:", BNB_tokenAddress);
          console.log("- Recipient:", to);
          console.log("- Amount:", amount.toString());
          
          
          const tx = await BNB_Send_Contract.sendToken(BNB_tokenAddress, to, amount);
          console.log("Transaction sent:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction confirmed:", receipt.hash);
          console.log("Gas used:", receipt.gasUsed.toString());
        } catch(err: any) {
          console.log("sendtoken from ETH contract to BSC chain error ==> ", err);
          if (err.data) {
            console.log("Error data:", err.data);
          }
          if (err.transaction) {
            console.log("Failed transaction:", err.transaction);
          }
        }
      }
      if (chainId == BASE_ChainId) {
        try {
          console.log("====== start sendtoken in base contract ======");
          console.log("Sending token with params:");
          console.log("- Token Address:", BASE_tokenAddress);
          console.log("- Recipient:", to);
          console.log("- Amount:", amount.toString());
          
          
          const tx = await BASE_Send_Contract.sendToken(BASE_tokenAddress, to, amount);
          console.log("Transaction sent:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction confirmed:", receipt.hash);
          console.log("Gas used:", receipt.gasUsed.toString());
        } catch(err: any) {
          console.log("sendtoken from EHT contract to base error ==> ", err);
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
    console.log("ETH contranct event error ==>", err);
  }


  // From BASE chain to EHT or BSC chain
  try {
    BASE_EVENT_Contract.on("Bridge", async(tokenAddress, from, to, amount, chainId) => {
      console.log("📦 BASE Bridge Event Detected");
      console.log("Token Address:", tokenAddress);
      console.log("From:", from);
      console.log("To:", to);
      console.log("Amount:", amount.toString());
      console.log("Destination Chain ID:", chainId.toString());

      if (chainId == ETH_ChainId) {
        try {
          console.log("====== start sendtoken in ETH contract ======");
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
          console.log("sendtoken by ETH_Contract from BASE contract error ==> ", err);
          if (err.data) {
            console.log("Error data:", err.data);
          }
          if (err.transaction) {
            console.log("Failed transaction:", err.transaction);
          }
        }
      }


      if (chainId == BNB_ChainId) {
        try {
          console.log("====== start sendtoken in BSC contract ======");
          console.log("Sending token with params:");
          console.log("- Token Address:", BNB_tokenAddress);
          console.log("- Recipient:", to);
          console.log("- Amount:", amount.toString());
          
          
          const tx = await BNB_Send_Contract.sendToken(BNB_tokenAddress, to, amount);
          console.log("Transaction sent:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction confirmed:", receipt.hash);
          console.log("Gas used:", receipt.gasUsed.toString());
        } catch(err: any) {
          console.log("sendtoken from BASE contract to BSC chain error ==> ", err);
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

}