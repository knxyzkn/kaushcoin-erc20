# Kaushcoin, an ERC-20 Token

## Introduction
Token Name: **Kaushcoin**

Token Symbol: **KSH**

Token Standard: **ERC-20**

Blockchain: **Ethereum Rinkeby TestNet**

## Kaushcoin Faucet

You can do the following in the faucet dapp.
1. Mint 10 KSH at a time to your Ethereum address.
2. Check the current balance of KSH in your Ethereum address.
3. Check the current total supply of all KSH in existence on the Rinkeby TestNet.

Note: Effort has been made to communicate the above through the Dapp UI with descriptive text where appropriate.

## Link to Kaushcoin Faucet

Link: https://crypto-donater.vercel.app/

## User Journey

1. Visit the faucet using the link above.
2. Connect a valid Ethereum address using a web3 wallet, such as MetaMask.
3. Click 'Mint 10 KSH' and approve the transaction in your wallet.
4. Your address will receive 10 KSH.

Smart Contract Address: `0x5d980be513a94D790beF385f4fE250d219ed5b4E`

Etherscan Link: https://rinkeby.etherscan.io/token/0x5d980be513a94D790beF385f4fE250d219ed5b4E

## Dapp Architecture

- Blockchain: **Ethereum**
- TestNet: **Rinkeby**
- Smart Contracts: **Solidity**
- Development Framework: **Truffle**
- Ethereum Gateway Service: **Infura**
- Dapp Framework: **React Box in Truffle**
- Frontend: **React**
- UI Components: **Material-UI**
- Libraries: **OpenZeppelin ERC-20 Contract**


## Directory Structure

- `client`: React frontend.
- `contracts`: Smart contracts deployed on the Rinkeby Test Network.
- `migrations`: Migration files for deploying smart contracts.
- `test`: Tests for smart contracts.
