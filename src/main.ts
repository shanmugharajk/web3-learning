import "./style.css";
import "~/dapp";

const el = document.getElementById("app");

if (el) {
  el.innerHTML = `Web3 learnings!`;
  el.innerHTML += `<br /> <br />  All methods are attached to dapp window variable!`;
}
