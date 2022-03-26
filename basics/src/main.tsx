import { QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "~/App";
import { queryClient } from "~/queryClient";
import { injectWeb3 } from "~/utils";

import "~/style.css";

function renderReactApp() {
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

async function main() {
  renderReactApp();
  injectWeb3();
}

main();
