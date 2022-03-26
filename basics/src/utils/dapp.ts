import { ERC20Abi } from "@web3-learning/abi";
import { error } from "@web3-learning/utils";
import { Contract, Provider } from "ethcall";
import { ethers } from "ethers";

import { rpcUrls } from "./constants";

export class Dapp {
  constructor(
    private provider:
      | ethers.providers.Web3Provider
      | ethers.providers.JsonRpcProvider
  ) {}

  connectWallet(
    web3Provider = new ethers.providers.Web3Provider(window.ethereum)
  ) {
    return web3Provider.send("eth_requestAccounts", []);
  }

  getTokenBalanceByRPCUrl(walletAddress: string, rpcUrl: string) {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    return provider.getBalance(walletAddress);
  }

  async getTokenBalance(tokenAddress: string, walletAddress: string) {
    // https://github.com/ethers-io/ethers.js/issues/160
    const ethersContract = new ethers.Contract(
      tokenAddress,
      ERC20Abi,
      this.provider
    );
    return ethersContract.balanceOf(walletAddress);
  }

  async multicall(walletAddress: string, addresses: readonly string[]) {
    try {
      const ethcallProvider = new Provider();
      await ethcallProvider.init(this.provider);

      const calls = addresses.map((address) => {
        const contract = new Contract(address, ERC20Abi);
        const balanceCall = contract.balanceOf(walletAddress);
        return balanceCall;
      });

      const data = await ethcallProvider.all(calls);

      return data?.map((record: any) => record?.toString());
    } catch (err) {
      error(err);
    }

    return [];
  }
}

export const dappInstance = new Dapp(
  new ethers.providers.JsonRpcProvider(rpcUrls.polygon)
);
