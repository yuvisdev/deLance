import React from "react";
import ReactDOM from "react-dom/client"; // Import the createRoot API
import WrappedApp from "./App"; // Import the wrapped App

const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root

root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
