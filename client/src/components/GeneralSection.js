import React, { Component } from "react";
import { Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

class GeneralSection extends Component {
  render() {
    const StyledTextFieldAccount = styled(TextField)({
      '& input + fieldset': {
        borderColor: '#42a5f5',
        borderWidth: 2,
      }
    });
    console.log("PROPS TOTAL SUPPLY", this.props.totalSupply);

    return (
      <div>
        <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          KaushCoin (KSH) is an ERC-20 Token on the Ethereum Rinkeby Test Network.
        </Typography>
        <div>
          <TextField
           id="read-only-smart-contract-address"
           label="Smart Contract Address (Read Only)"
           defaultValue={this.props.contractAddress}
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
           defaultValue={this.props.name}
           InputProps={{
             readOnly: true,
           }}
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
         />

         <TextField
          id="read-only-token-symbol"
          label="Token Symbol (Read Only)"
          defaultValue={this.props.symbol}
          InputProps={{
            readOnly: true,
          }}
          style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
         />

        <TextField
         id="read-only-token-total-supply"
         label="Token Total Supply (Read Only)"
         defaultValue={(this.props.totalSupply/Math.pow(10,18)).toLocaleString()}
         helperText="This is the current total supply of KSH in existence."
         InputProps={{
           readOnly: true,
         }}
         style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
        />

        <TextField
         id="read-only-token-decimals"
         label="Token Decimals (Read Only)"
         defaultValue={this.props.decimals}
         helperText={`KSH can have upto 18 decimal places.`}
         InputProps={{
           readOnly: true,
         }}
         style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '33vw'}}
        />
       </div>

       <Button size="small" variant="contained" disableElevation
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}
           href={`https://rinkeby.etherscan.io/token/${this.props.contractAddress}`}
           target="_blank"
       >
        View in Etherscan
        <OpenInNewIcon fontSize="small"/>
       </Button>

      </div>
    )
  }
}

export default GeneralSection;
