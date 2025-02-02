# Blockchain 2FA System

This project implements a blockchain-based Two-Factor Authentication (2FA) system using Solidity for the smart contract and React (Vite) for the frontend. It allows users to register, generate OTPs, sign them, and verify authentication using MetaMask.

## 🚀 Features
- Register users with a cryptographic OTP seed.
- Generate and sign OTPs using MetaMask.
- Verify OTPs using Ethereum signatures.
- Secure authentication with a smart contract.

---

## 📜 Smart Contract Deployment

1. Navigate to the `contract` folder and locate `OTP.sol`.
2. Open [Remix](https://remix.ethereum.org/).
3. Upload `OTP.sol` to Remix.
4. Compile the contract using Solidity 0.8.20.
5. Deploy the contract to a testnet (e.g., Sepolia) using MetaMask.
6. Copy the deployed contract address for frontend integration.

---

## 💻 Frontend Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/blockchain-2fa.git](https://github.com/rakshit-singh1/decentralized-otp-verification.git
cd blockchain-2fa

### 2️⃣ Install Dependencies
After deploying the contract, navigate to the frontend directory and install the required packages:
```sh
npm install

### 3️⃣ Run the Frontend
Once dependencies are installed, start the Vite development server:
```sh
npm run dev
