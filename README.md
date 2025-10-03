# Simple Smart Contract Reader

A basic dApp that allows you to call any read-only (`view`) function on a given smart contract and see the result. This is a fundamental tool for interacting with the blockchain.

## Features
- Connects to any EVM network via an RPC URL.
- Takes a contract address, ABI, and function name as input.
- Displays the returned data from the smart contract.

## How to Use
1.  **Configure:** Open `script.js` and paste your RPC URL.
2.  **Run:** Open `index.html` in your browser.
3.  **To Test:** Use a well-known contract like USDC on Ethereum:
    - **Address:** `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`
    - **ABI:** `[ "function name() view returns (string)", "function symbol() view returns (string)" ]`
    - **Function to Call:** `name` or `symbol`
    - 
