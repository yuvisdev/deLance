import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Main from "./components/Main";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import JobsList from "./components/JobsList";
import ConnectWallet from "./components/ConnectWallet";
import Home from "./components/Home";
import Users from "./components/Users";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css"; // Default styles for the wallet modal
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import Solana from "./components/Solana";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pay", element: <Solana /> },
      { path: "/main", element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/jobs", element: <JobsList /> },
      { path: "/users", element: <Users /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default function WrappedApp() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => {
    const url = clusterApiUrl(network);
    console.log("Endpoint:", url); // Log the endpoint
    return url;
  }, [network]);

  const wallets = useMemo(() => {
    const walletArray = [new PhantomWalletAdapter()];
    console.log("Wallets:", walletArray); // Log the wallets
    return walletArray;
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
