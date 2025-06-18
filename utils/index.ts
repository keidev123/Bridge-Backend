import * as fs from 'fs';
import { ContractAbi } from 'web3';


export function get_erc20_abi(): ContractAbi {
  const data = fs.readFileSync('./src/abis/erc20.json', 'utf8');
  return JSON.parse(data);
}

export function get_bridge_abi(): ContractAbi {
  const data = fs.readFileSync('./src/abis/erc20.json', 'utf8');
  return JSON.parse(data);
}