import { useState } from "react";
import Web3 from "web3";

function Wallet() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:5173");
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const contractABI = [
    /* Your contract ABI here */
  ];
  const subscriptionContract = new web3.eth.Contract(
    contractABI,
    contractAddress
  );

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  const handleSubscription = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await subscriptionContract.methods
      .subscribe()
      .send({ from: accounts[0], value: web3.utils.toWei("0.1", "ether") });
    console.log(result);
  };

  const checkSubscription = async () => {
    const accounts = await web3.eth.getAccounts();
    const isActive = await subscriptionContract.methods
      .checkSubscription(accounts[0])
      .call();
    setIsSubscribed(isActive);
  };

  const connectWallet = async () => {
    const accounts = await web3.eth.requestAccounts();
    setUserAddress(accounts[0]);
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={handleSubscription}>Subscribe</button>
      <button onClick={checkSubscription}>Check Subscription</button>
      {isSubscribed ? (
        <p>You are subscribed!</p>
      ) : (
        <p>You are not subscribed.</p>
      )}
    </div>
  );
}

export default Wallet;
