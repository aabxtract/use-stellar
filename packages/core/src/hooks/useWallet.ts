import { useCallback, useMemo } from "react";
import {
  getNetworkDetails,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";
import { useStellarContext } from "../context/StellarProvider";
import type { WalletState, WalletType, StellarNetwork } from "../types";

export interface UseWalletReturn extends WalletState {
  connect:              (wallet?: WalletType) => Promise<void>;
  disconnect:           () => void;
  refreshWalletNetwork: () => Promise<void>;
  isNetworkMismatch:    boolean;
}

export function useWallet(): UseWalletReturn {
  const { wallet, setWallet, network } = useStellarContext();

  const connect = useCallback(
    async (walletType: WalletType = "freighter") => {
      setWallet(prev => ({ ...prev, connecting: true, error: null }));

      try {
        let address: string;
        let walletNetwork: StellarNetwork;

        if (walletType === "freighter") {
          const result = await connectFreighter(network);
          address = result.address;
          walletNetwork = result.walletNetwork;
        } else {
          throw new Error(
            `Wallet "${walletType}" not yet supported. ` +
            `Contributions welcome — see GitHub issues.`
          );
        }

        setWallet({
          connected:     true,
          address,
          network,
          wallet:        walletType,
          connecting:    false,
          error:         null,
          walletNetwork,
        });
      } catch (err) {
        setWallet(prev => ({
          ...prev,
          connecting: false,
          error:      err instanceof Error ? err.message : "Failed to connect wallet",
        }));
      }
    },
    [setWallet, network]
  );

  const disconnect = useCallback(() => {
    setWallet({
      connected:     false,
      address:       null,
      network:       null,
      wallet:        null,
      connecting:    false,
      error:         null,
      walletNetwork: null,
    });
  }, [setWallet]);

  const refreshWalletNetwork = useCallback(async () => {
    if (!wallet.connected || wallet.wallet !== "freighter") {
      return;
    }

    try {
      const walletNetwork = await getFreighterNetwork();
      setWallet(prev => ({
        ...prev,
        walletNetwork,
        error: null,
      }));
    } catch (err) {
      setWallet(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : "Failed to refresh wallet network",
      }));
    }
  }, [wallet.connected, wallet.wallet, setWallet]);

  const isNetworkMismatch = useMemo(() => {
    if (!wallet.connected || !wallet.walletNetwork) return false;
    return wallet.network !== wallet.walletNetwork;
  }, [wallet.connected, wallet.network, wallet.walletNetwork]);

  return { 
    ...wallet, 
    connect, 
    disconnect,
    refreshWalletNetwork,
    isNetworkMismatch,
  };
}

// ── Freighter connector ────────────────────────────────────────────────────
async function connectFreighter(network: string): Promise<{ address: string; walletNetwork: StellarNetwork }> {
  const connection = await isConnected();
  if (connection.error || !connection.isConnected) {
    throw new Error(
      "Freighter wallet not found. " +
      "Install the Freighter browser extension and try again."
    );
  }

  const access = await requestAccess();
  if (access.error) {
    throw new Error(access.error.message);
  }

  if (!access.address) {
    throw new Error("Freighter did not return a wallet address.");
  }

  const walletNetwork = await getFreighterNetwork();

  // Validate we're on the right network
  const expectedPassphrase =
    network === "mainnet"
      ? "Public Global Stellar Network ; September 2015"
      : "Test SDF Network ; September 2015";

  const actualPassphrase = 
    walletNetwork === "mainnet"
      ? "Public Global Stellar Network ; September 2015"
      : "Test SDF Network ; September 2015";

  if (actualPassphrase !== expectedPassphrase) {
    throw new Error(
      `Wrong network. Switch Freighter to ${network} and try again.`
    );
  }

  return { address: access.address, walletNetwork };
}

// ── Get Freighter network ──────────────────────────────────────────────────
async function getFreighterNetwork(): Promise<StellarNetwork> {
  const networkDetails = await getNetworkDetails();
  if (networkDetails.error) {
    throw new Error(networkDetails.error.message);
  }

  // Determine network from passphrase
  if (networkDetails.networkPassphrase === "Public Global Stellar Network ; September 2015") {
    return "mainnet";
  }
  if (networkDetails.networkPassphrase === "Test SDF Network ; September 2015") {
    return "testnet";
  }

  throw new Error(
    `Unknown network passphrase: ${networkDetails.networkPassphrase}`
  );
}
