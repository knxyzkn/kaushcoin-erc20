import { Typography, Button, TextField } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React, { Component } from "react";
import GeneralSection from "./GeneralSection.js";

class NotWeb3 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to KaushCoin!</h1>
        <Typography align="center" style={{color: 'red', marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          Please login to your Web3 wallet (such as MetaMask) and connect your account on the Ethereum Rinkeby Test Network to use the faucet.
        </Typography>
        <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          KaushCoin (KSH) is an ERC-20 Token on the Ethereum Rinkeby Test Network.
        </Typography>
        <div>
          <TextField
           id="read-only-smart-contract-address"
           label="Smart Contract Address (Read Only)"
           defaultValue="0x5d980be513a94D790beF385f4fE250d219ed5b4E"
           InputProps={{
             readOnly: true,
           }}
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '90vw'}}
         />
        </div>

        <div>
          <TextField
           id="read-only-token-name"
           label="Token Name (Read Only)"
           defaultValue="KaushCoin"
           InputProps={{
             readOnly: true,
           }}
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
         />

         <TextField
          id="read-only-token-symbol"
          label="Token Symbol (Read Only)"
          defaultValue="KSH"
          InputProps={{
            readOnly: true,
          }}
          style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
         />
      </div>

      <div/>

       <Button size="small" variant="contained" disableElevation
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}
           href={`https://rinkeby.etherscan.io/token/0x5d980be513a94D790beF385f4fE250d219ed5b4E`}
           target="_blank"
       >
        View in Etherscan
        <OpenInNewIcon fontSize="small"/>
       </Button>

       <div/>

      </div>
    )
  }
}

export default NotWeb3;
