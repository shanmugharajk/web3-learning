import { dappInstance } from "./dapp";
import { DataLoader } from "./dataloader";
import { useStore } from "~/store";

export const multiCallLoader = new DataLoader<string, any>(
  async (addresses) => {
    return dappInstance.multicall(useStore.getState().walletAddress, addresses);
  },
  {
    cache: false,
    batchScheduleFn: (callback) => setTimeout(callback, 200),
  }
);
