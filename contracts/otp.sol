// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

contract Blockchain2FA {
    using ECDSA for bytes32;

    struct User {
        address userAddress;
        bytes32 otpSeed;
        uint256 lastUsedOtp;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed user, bytes32 otpSeed);
    event OTPVerified(address indexed user, uint256 otp);
    event UserDeregistered(address indexed user);

    function registerUser(bytes32 _otpSeed) external {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, _otpSeed, 0);
        emit UserRegistered(msg.sender, _otpSeed);
    }

    function verifyOTP(uint256 otp, bytes memory signature) external returns (bool) {
        User memory user = users[msg.sender];
        require(user.userAddress != address(0), "User not registered");

        bytes32 messageHash = keccak256(abi.encodePacked(otp, msg.sender));
        address signer = ECDSA.recover(
            MessageHashUtils.toEthSignedMessageHash(messageHash),
            signature
        );
        require(signer == user.userAddress, "Invalid OTP signature");

        require(otp > user.lastUsedOtp, "OTP already used");

        users[msg.sender].lastUsedOtp = otp;
        emit OTPVerified(msg.sender, otp);
        return true;
    }

    function deregisterUser() external {
        require(users[msg.sender].userAddress != address(0), "User not registered");

        delete users[msg.sender];
        emit UserDeregistered(msg.sender);
    }
}
