import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useSelector } from "react-redux";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        setNetwork(network.name);
        setError(""); // Clear any error message
      } catch (err) {
        setError("Failed to connect wallet.");
        console.error("Error connecting to MetaMask:", err);
      }
    } else {
      setError("MetaMask is not installed. Please install MetaMask.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const userName = useSelector((state) => state.user.name);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h2 className="bg-blue-50 border border-blue-700 p-2 font-semibold text-base">
          Namaste 👋, {userName} Click here to connect your wallet!
        </h2>
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
        {account && (
          <p>
            Connected to {network}: {account}
          </p>
        )}

        {!account && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ConnectWallet;
