import React from "react";
import { AppState, useStore } from "~/store";
import { dappInstance, rpcUrls } from "~/utils";

export const MATIC: React.FunctionComponent = () => {
  const walletAddress = useStore((state) => state.walletAddress);

  const [balance, setBalance] = React.useState<string>();

  const fetchMaticBalance = async () => {
    if (!walletAddress) {
      return;
    }

    const res = await dappInstance.getTokenBalanceByRPCUrl(
      walletAddress,
      rpcUrls.polygon
    );

    setBalance(res.toString());
  };

  React.useEffect(() => {
    fetchMaticBalance();
  }, [walletAddress]);

  return (
    <div className="card">
      <div className="text-sm">MATIC</div>
      <div className="mt-2 text-xs text-slate-400 font-semibold">
        {balance || "-"}
      </div>
    </div>
  );
};
