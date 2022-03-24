import { log } from "@web3-learning/utils";
import { ethers } from "ethers";

import { Dapp } from "./dapp";

import "./style.css";

function render() {
  const app = document.querySelector<HTMLDivElement>("#app")!;

  app.innerHTML = `Web3 learnings!`;
  app.innerHTML += `<br /> <br />  All methods are attached to dapp window variable!`;
}

async function main() {
  render();

  const dappWeb3 = new Dapp(new ethers.providers.Web3Provider(window.ethereum));
  const dappRpc = new Dapp(
    new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/")
  );

  window.dappWeb3 = dappWeb3;
  window.dappRpc = dappRpc;
  window.log = log;
}

main();
