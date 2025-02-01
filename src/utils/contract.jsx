import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x60bE4036aCA39FefdF7955768C085aC96a30f2cD";
const ABI = [
  {
    "inputs": [{ "internalType": "bytes32", "name": "_otpSeed", "type": "bytes32" }],
    "name": "registerUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "otp", "type": "uint256" },
      { "internalType": "bytes", "name": "signature", "type": "bytes" }
    ],
    "name": "verifyOTP",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask is required");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};

export { getContract };
