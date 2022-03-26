import { dappInstance } from "./dapp";
import { Batch } from "./batch";
import { useStore } from "~/store";

export const multiCallLoader = new Batch({
  batchSize: 10,
  multiCallFn: async (queryInfos) => {
    return dappInstance.multicall(
      useStore.getState().walletAddress,
      queryInfos.map((q) => q.address)
    );
  },
});
