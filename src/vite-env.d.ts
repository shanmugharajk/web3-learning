/// <reference types="vite/client" />

interface IDapp {
  connectWallet: () => void;

  getTokenBalanceByRPCUrl: (
    walletAddress: string,
    rpcUrl?: string
  ) => Promise<string | undefined>;

  getTokenBalance: (
    tokenAddress: string,
    walletAddress: string
  ) => Promise<string | undefined>;

  multicall: (walletAddress: string, ...address: string[]) => Promise<string[]>;
}

declare var log: (message?: any, ...optionalParams: any[]) => void;

declare var dapp: IDapp;

interface Window {
  ethereum: any;
  dapp: any;
  log(message?: any, ...optionalParams: any[]): void;
}
