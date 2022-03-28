import React from "react";
import { ethers } from "ethers";

import { useForceUpdate } from "~/utils/useForceUpdate";

type DappProvider =
  | ethers.providers.Web3Provider
  | ethers.providers.StaticJsonRpcProvider;

type ListenerFn = (value: DappProvider) => void;

class Dapp {
  private _dappProvider?: DappProvider;
  private _subscriptions = new Set<ListenerFn>();

  set(provider: DappProvider) {
    this._dappProvider = provider;
    this._subscriptions.forEach((sub) =>
      sub(Object.freeze(this._dappProvider!))
    );
  }

  subscribe(cb: ListenerFn) {
    this._subscriptions.add(cb);
    return () => void this._subscriptions.delete(cb);
  }
}

export const dapp = new Dapp();

export const useDapp = (): [
  DappProvider | undefined,
  (provider: DappProvider) => void
] => {
  const dappProviderRef = React.useRef<DappProvider>();
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {
    return dapp.subscribe((dappProvider) => {
      dappProviderRef.current = dappProvider;
      forceUpdate();
    });
  }, []);

  return [dappProviderRef.current, dapp.set];
};
