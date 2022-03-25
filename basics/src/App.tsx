import React from "react";
import { ethers } from "ethers";

import { DAI, MATIC, USDC } from "~/Balance";
import { ConnectWallet } from "~/ConnectWallet";
import { Dapp, rpcUrls, useForceUpdate } from "~/utils";

const dapp = new Dapp(new ethers.providers.JsonRpcProvider(rpcUrls.polygon));

export const App: React.FunctionComponent = () => {
  return (
    <div className="p-3 text-white">
      <header className="py-3 px-6 border-b border-slate-50/[0.06]">
        Web3 Learning
      </header>

      <main className="px-10">
        <ConnectWallet />

        <div className="mt-10 flex space-x-5">
          <MATIC />
          <DAI />
          <USDC />
        </div>
      </main>
    </div>
  );
};
