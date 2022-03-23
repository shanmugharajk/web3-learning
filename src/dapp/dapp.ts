import { Contract, Provider } from "ethcall";
import { ethers } from "ethers";

import { ERC20Abi } from "./ERC20Abi";

export class Dapp implements IDapp {
  provider: ethers.providers.Web3Provider;

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  async connectWallet() {
    try {
      const res = await this.provider.send("eth_requestAccounts", []);
      log(res);
    } catch (error) {
      log(error);
    }
  }

  async getTokenBalanceByRPCUrl(
    walletAddress: string,
    rpcUrl: string = "https://polygon-rpc.com/"
  ) {
    let balance;

    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      balance = await provider.getBalance(walletAddress);
    } catch (error) {
      log(error);
    }

    return balance?.toString();
  }

  async getTokenBalance(tokenAddress: string, walletAddress: string) {
    // https://github.com/ethers-io/ethers.js/issues/160
    let balance;

    try {
      const ethersContract = new ethers.Contract(
        tokenAddress,
        ERC20Abi,
        this.provider
      );
      balance = await ethersContract.balanceOf(walletAddress);
    } catch (error) {
      log(error);
    }

    return balance?.toString();
  }

  async multicall(walletAddress: string, ...address: string[]) {
    try {
      const ethcallProvider = new Provider();
      await ethcallProvider.init(this.provider);

      const contract = new Contract(address[0], ERC20Abi);
      const balanceCall = contract.balanceOf(walletAddress);
      const nativeTokenBalanceCall =
        ethcallProvider.getEthBalance(walletAddress);

      const data: any = await ethcallProvider.all([
        balanceCall,
        nativeTokenBalanceCall,
      ]);
      return data?.map((record: any) => record.toString());
    } catch (error) {
      log(error);
    }
  }
}
