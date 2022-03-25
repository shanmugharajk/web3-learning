import { ethers } from "ethers";
import React from "react";
import ReactDOM from "react-dom";
import { log } from "@web3-learning/utils";

import { App } from "~/App";
import { injectWeb3 } from "~/utils";

import "~/style.css";

function renderReactApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

async function main() {
  renderReactApp();
  injectWeb3();
}

main();
