import * as dotenv from 'dotenv';
import { ethers } from "ethers";
dotenv.config();

export const BNB_tokenAddress = "0x3337289acfd41c3fdd39626736958374c71e50f9";
export const BNB_USDCAddress = "0xdaccc914417609f08594eeedc2f5fcf1207c1240";

export const ETHEREUM_tokenAddress = "0x5c29b06630cf8fd83924aa5b934f0db37f9209d5";
export const ETHEREUM_USDCAddress = "0xd9c3fb58258beb3193de98361532f84b542fc891";

export const BASE_tokenAddress = "";
export const BASE_USDCAddress = "";


export const BNB_BRIDGE_CONTRACT_ADDRESS = "0xd29574629938e8adde63a21fd6bc7f9b6ff043c4";
export const ETH_BRIDGE_CONTRACT_ADDRESS = "0x1982ac6a7a6e5e08259d97b3250a51d6b13c6363";
export const BASE_BRIDGE_CONTRACT_ADDRESS = "";

export const BNB_ChainId = 97;
export const BASE_ChainId = 84532;
export const ETH_ChainId = 11155111;

export const ETH_RPC_ENDPOINT = process.env.NEXT_PUBLIC_ETH_RPC_ENDPOINT || "" ;
export const BSC_RPC_ENDPOINT = process.env.NEXT_PUBLIC_BSC_RPC_ENDPOINT || "" ;
export const BASE_RPC_ENDPOINT = process.env.NEXT_PUBLIC_BASE_RPC_ENDPOINT || "" ;

export const MAIN_WALLET_ADDRESS = process.env.NEXT_PUBLIC_MAIN_WALLET_ADDRESS || "" ;

export const BNB_Provider = new ethers.WebSocketProvider(BSC_RPC_ENDPOINT);
export const BASE_Provider = new ethers.WebSocketProvider(BASE_RPC_ENDPOINT);
export const ETH_Provider = new ethers.WebSocketProvider(ETH_RPC_ENDPOINT);

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
  },
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

export const BNB_Contract = new ethers.Contract(BNB_BRIDGE_CONTRACT_ADDRESS, Abi, BNB_Provider);
export const BASE_Contract = new ethers.Contract(BASE_BRIDGE_CONTRACT_ADDRESS, Abi, BASE_Provider);
export const ETH_Contract = new ethers.Contract(ETH_BRIDGE_CONTRACT_ADDRESS, Abi, ETH_Provider);
