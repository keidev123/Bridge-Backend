import * as dotenv from 'dotenv';
import { ethers } from "ethers";
dotenv.config();

export const BNB_tokenAddress = "0x3337289acfd41c3fdd39626736958374c71e50f9";
export const BNB_USDCAddress = "0xdaccc914417609f08594eeedc2f5fcf1207c1240";

export const ETHEREUM_tokenAddress = "0x5c29b06630Cf8Fd83924aa5b934f0DB37F9209d5";
export const ETHEREUM_USDCAddress = "0xd9c3fb58258beb3193de98361532f84b542fc891";

export const BASE_tokenAddress = "0x5c29b06630cf8fd83924aa5b934f0db37f9209d5";      //change
export const BASE_USDCAddress = "0xd9c3fb58258beb3193de98361532f84b542fc891";       //change


export const BNB_BRIDGE_CONTRACT_ADDRESS = "0xd29574629938e8adde63a21fd6bc7f9b6ff043c4";
export const ETH_BRIDGE_CONTRACT_ADDRESS = "0x1982ac6a7a6e5e08259d97b3250a51d6b13c6363";
export const BASE_BRIDGE_CONTRACT_ADDRESS = "0x1982ac6a7a6e5e08259d97b3250a51d6b13c6363";       // have to change this address

export const BNB_ChainId = 97;
export const BASE_ChainId = 84532;
export const ETH_ChainId = 11155111;

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
