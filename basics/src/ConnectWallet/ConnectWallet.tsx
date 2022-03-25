import React from "react";
import { useStore } from "~/store";
import { dappInstance } from "~/utils";

export const ConnectWallet: React.FunctionComponent = () => {
  const [walletAddress, setWalletAddress] = useStore((state) => [
    state.walletAddress,
    state.setWalletAddress,
  ]);

  const handleConnectWallet = async () => {
    if (walletAddress) {
      return;
    }

    const [walletAdd] = await dappInstance.connectWallet();
    setWalletAddress(walletAdd);
  };

  return (
    <div className="card mt-10">
      <p className="mb-4 text-slate-300">Please connect to MetaMask</p>
      <button
        className={`btn-dark ${walletAddress ? "cursor-not-allowed" : ""}`}
        onClick={handleConnectWallet}
        disabled={!!walletAddress}
      >
        {walletAddress ? walletAddress.slice(0, 8) : "Connect Wallet"}
      </button>
    </div>
  );
};
