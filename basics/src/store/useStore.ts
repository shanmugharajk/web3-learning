import { produce } from "immer";
import create from "zustand";
import { persist } from "zustand/middleware";

import type { AppState } from "./types";

const immer = (config: any) => (set: any, get: any) =>
  config((fn: any) => set(produce<AppState>(fn), get));

export const useStore = create<AppState>(
  persist(
    immer(
      // Store methods
      (set: any) => ({
        // Properties
        walletAddress: "",

        // Setters
        setWalletAddress: (address: string) =>
          set((state: AppState) => void (state.walletAddress = address)),
      })
    ),
    { name: "web3" }
  )
);
