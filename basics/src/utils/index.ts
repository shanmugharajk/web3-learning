import { ethers } from "ethers";
import { log } from "@web3-learning/utils";

import { Dapp, dappInstance } from "./dapp";
import { rpcUrls, contractAddresses } from "./constants";

export { multiCallLoader } from "./multiCallLoader";
export { useForceUpdate } from "./useForceUpdate";

export const injectWeb3 = () => {
  const dappWeb3 = new Dapp(new ethers.providers.Web3Provider(window.ethereum));
  const dappRpc = new Dapp(
    new ethers.providers.JsonRpcProvider(rpcUrls.polygon)
  );

  window.dappWeb3 = dappWeb3;
  window.dappRpc = dappRpc;
  window.log = log;
};

export { contractAddresses, Dapp, dappInstance, rpcUrls };
