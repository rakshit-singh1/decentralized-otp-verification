import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers, getBytes, solidityPackedKeccak256 } from "ethers";
import { Button, TextField, Typography, Box } from "@mui/material";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [signature, setSignature] = useState("");

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const signOTP = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask!");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const generatedOtp = generateOTP();
      setOtp(generatedOtp);

      // Use getBytes to convert to Uint8Array and sign the message
      const messageHash = solidityPackedKeccak256(
        ["uint256", "address"], 
        [generatedOtp, await signer.getAddress()]
      );

      // Sign the hashed message using the signer
      const signedMessage = await signer.signMessage(getBytes(messageHash));
      setSignature(signedMessage);
    } catch (err) {
      alert("Error signing OTP: " + err.message);
    }
  };

  const handleVerify = async () => {
    try {
      if (!otp || !signature) return alert("Generate and sign OTP first!");
      const contract = await getContract();
      const tx = await contract.verifyOTP(otp, signature);
      await tx.wait();
      alert("OTP Verified Successfully!");
    } catch (err) {
      console.log({ err });
      alert("Verification Failed: " + err.message);
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5">Verify OTP</Typography>
      <TextField
        label="Generated OTP"
        value={otp}
        variant="outlined"
        fullWidth
        margin="normal"
        disabled
      />
      <Button variant="contained" color="secondary" onClick={signOTP}>
        Generate & Sign OTP
      </Button>
      <TextField
        label="Signature"
        value={signature}
        variant="outlined"
        fullWidth
        margin="normal"
        disabled
      />
      <Button variant="contained" color="primary" onClick={handleVerify}>
        Verify OTP
      </Button>
    </Box>
  );
};

export default VerifyOTP;
