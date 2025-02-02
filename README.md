# Blockchain 2FA System

This project implements a **blockchain-based two-factor authentication (2FA) system** using **Ethereum smart contracts** and a **React (Vite) frontend**. The smart contract is deployed on a testnet and interacts with the frontend via MetaMask.

## 📜 Smart Contract

The **`Blockchain2FA.sol`** contract is stored in the `contract/` folder. It allows users to:
- **Register** with an OTP seed.
- **Generate and sign OTPs** using their Ethereum private key.
- **Verify OTPs** securely on-chain.
- **Deregister** from the system.

### 🚀 Deploying the Smart Contract

To deploy the smart contract using **Remix**:

1. Open **Remix IDE** ([Remix Ethereum](https://remix.ethereum.org)).
2. Create a new file and copy the contents of `contract/Blockchain2FA.sol` into it.
3. Compile the contract with Solidity **0.8.20**.
4. Go to the **Deploy & Run Transactions** tab.
5. Select **Injected Provider - MetaMask** and connect to **Sepolia Testnet**.
6. Click **Deploy** and save the contract address.

## 💻 Frontend Setup

The frontend is built using **Vite + React + Material-UI**.

### 🔧 Installation

Clone the repository and navigate to the project directory:

```sh
git clone https://github.com/your
