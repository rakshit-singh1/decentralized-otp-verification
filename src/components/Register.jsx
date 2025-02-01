import { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";
import { Button, TextField, Typography, Box } from "@mui/material";

const Register = () => {
  const [otpSeed, setOtpSeed] = useState("");

  const handleRegister = async () => {
    if (!otpSeed) return alert("Enter OTP Seed");
    try {
      const contract = await getContract();
      const tx = await contract.registerUser(ethers.keccak256(ethers.toUtf8Bytes(otpSeed)));
      await tx.wait();
      alert("User Registered Successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5">Register for Blockchain 2FA</Typography>
      <TextField
        label="Enter OTP Seed"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setOtpSeed(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
