import { execSync } from "child_process";

const packageToRun = process.argv[2] || "@web3-learning/basics";

execSync(`pnpm run dev --filter ${packageToRun}`, { stdio: "inherit" });
