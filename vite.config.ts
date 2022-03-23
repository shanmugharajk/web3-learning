import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      "~": resolve("src"),
    },
  },
});
