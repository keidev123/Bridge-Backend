import * as dotenv from 'dotenv';
import { ethers } from "ethers";
dotenv.config();

export const BNB_tokenAddress = "0x4ae9656e67557e55f2f4ca719a2e2429041b1730";
export const BNB_USDCAddress = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";

export const ETHEREUM_tokenAddress = "0xbc9c3be7bb3605aae053bcc4d514643b0525bd13";
export const ETHEREUM_USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

export const BASE_tokenAddress = "0xa5ee6bf543d032e0cb4da2057ef0b40941eae8bc";      //change
export const BASE_USDCAddress = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";       //change


export const BNB_BRIDGE_CONTRACT_ADDRESS = "0xa5ee6bf543d032e0cb4da2057ef0b40941eae8bc";
export const ETH_BRIDGE_CONTRACT_ADDRESS = "0xa5ee6bf543d032e0cb4da2057ef0b40941eae8bc";
export const BASE_BRIDGE_CONTRACT_ADDRESS = "0xa357ba150811ff04bd739d92622a10185df4b3cc";       // have to change this address

export const BNB_ChainId = 56;
export const BASE_ChainId = 8453;
export const ETH_ChainId = 1;

export const ETH_RPC_ENDPOINT = process.env.NEXT_PUBLIC_ETH_RPC_ENDPOINT || "" ;
export const BSC_RPC_ENDPOINT = process.env.NEXT_PUBLIC_BSC_RPC_ENDPOINT || "";
export const BASE_RPC_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_ENDPOINT || "" ;

export const ETH_RPC_WSS_ENDPOINT = process.env.NEXT_PUBLIC_ETH_RPC_WSS_ENDPOINT || "" ;
export const BSC_RPC_WSS_ENDPOINT = process.env.NEXT_PUBLIC_BSC_RPC_WSS_ENDPOINT || "";
export const BASE_RPC_WSS_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_WSS_ENDPOINT || "" ;

export const MAIN_WALLET_ADDRESS = process.env.NEXT_PUBLIC_MAIN_WALLET_ADDRESS || "" ;
export const MAIN_WALLET_PRIVATE_KEY = process.env.NEXT_PUBLIC_MAIN_WALLET_PRIVATE_KEY || "" ;

export const BNB_Event_Provider = new ethers.WebSocketProvider(BSC_RPC_WSS_ENDPOINT);
export const BASE_EVENT_Provider = new ethers.WebSocketProvider(BASE_RPC_WSS_ENDPOINT);
export const ETH_Event_Provider = new ethers.WebSocketProvider(ETH_RPC_WSS_ENDPOINT);

export const ETH_Send_Provider = new ethers.JsonRpcProvider(ETH_RPC_ENDPOINT);
export const BSC_Send_Provider = new ethers.JsonRpcProvider(BSC_RPC_ENDPOINT);
export const BASE_Send_Provider = new ethers.JsonRpcProvider(BASE_RPC_ENDPOINT);

export const ETH_Signer = new ethers.Wallet(MAIN_WALLET_PRIVATE_KEY, ETH_Send_Provider)
export const BSC_Signer = new ethers.Wallet(MAIN_WALLET_PRIVATE_KEY, BSC_Send_Provider)
export const BASE_Signer = new ethers.Wallet(MAIN_WALLET_PRIVATE_KEY, BASE_Send_Provider)

export const Abi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "tokenAddress", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256" }
    ],
    "name": "Bridge",
    "type": "event"
  }
];
export const sendAbi = [
  {
    "inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sendToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
  }
];

export const BNB_Event_Contract = new ethers.Contract(BNB_BRIDGE_CONTRACT_ADDRESS, Abi, BNB_Event_Provider);
export const BASE_EVENT_Contract = new ethers.Contract(BASE_BRIDGE_CONTRACT_ADDRESS, Abi, BASE_EVENT_Provider);
export const ETH_Event_Contract = new ethers.Contract(ETH_BRIDGE_CONTRACT_ADDRESS, Abi, ETH_Event_Provider);


export const BNB_Send_Contract = new ethers.Contract(BNB_BRIDGE_CONTRACT_ADDRESS, sendAbi, BSC_Signer);
export const BASE_Send_Contract = new ethers.Contract(BASE_BRIDGE_CONTRACT_ADDRESS, sendAbi, BASE_Signer);
export const ETH_Send_Contract = new ethers.Contract(ETH_BRIDGE_CONTRACT_ADDRESS, sendAbi, ETH_Signer);
