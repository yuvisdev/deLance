import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";

const Solana = () => {
  // Access wallet and connection hooks
  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  // Function to send SOL transaction
  const sendTransactionHandler = async () => {
    if (!publicKey) {
      console.log("Wallet not connected");
      return;
    }

    // Create the transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey, // Sending to yourself for testing purposes
        lamports: 1 * LAMPORTS_PER_SOL, // 1 SOL in lamports
      })
    );

    try {
      // Send the transaction
      const signature = await sendTransaction(transaction, connection);
      // Confirm the transaction
      await connection.confirmTransaction(signature, "processed");
      console.log("Transaction successful:", signature);
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-y-4 mt-11">
      <h1 className="italic text-2xl bg-purple-300 font-semibold">
        Solana Wallet Integration
      </h1>

      {/* WalletMultiButton will handle the connect/disconnect and display the wallet options */}
      <WalletMultiButton />

      {connected ? (
        <div className="border border-purple-700">
          <p className="text-semibold text-violet-950 text-xl">
            Wallet connected! 🎉
          </p>
          <div className=" flex flex-col gap-y-4">
            <p className="text-base font-bold">
              Public Key: {publicKey?.toBase58()}
            </p>
          </div>

          {/* Button to trigger the transaction */}
          <button
            onClick={sendTransactionHandler}
            className="bg-red-100 border-red-700 p-2 border-r-4 text-lg font-semibold"
          >
            Send 1 SOL
          </button>
        </div>
      ) : (
        <p className="text-xl font-bold italic ">
          Please connect your Phantom wallet 🎒
        </p>
      )}
    </div>
  );
};

export default Solana;
