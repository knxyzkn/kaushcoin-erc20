import { Typography } from '@mui/material';
import React, { Component } from "react";

class NotWeb3 extends Component {
  render() {
    return (
      <div className="App">
        <h1>KaushCoin (KSH)</h1>
        <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          Welcome to KaushCoin!
        </Typography>
        <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          Please login to your Ethereum wallet (such as MetaMask) and connect your account on the Rinkeby Test Network.
        </Typography>
      </div>
    )
  }
}

export default NotWeb3;
