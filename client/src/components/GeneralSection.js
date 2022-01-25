import React, { Component } from "react";
import { Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

class GeneralSection extends Component {
  render() {
    const StyledTextFieldAccount = styled(TextField)({
      '& input + fieldset': {
        borderColor: '#42a5f5',
        borderWidth: 2,
      }
    });

    return (
      <div>
        <Typography align="left" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          KaushCoin (KSH) is an ERC-20 Token on the Ethereum Rinkeby Test Network.
        </Typography>
        <div>
          <TextField
           id="read-only-connected-account"
           label="Smart Contract Address (Read Only)"
           defaultValue={this.props.contractAddress}
           InputProps={{
             readOnly: true,
           }}
           style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '90vw'}}
         />
        </div>
        <div>
          <StyledTextFieldAccount
           id="read-only-connected-account"
           label="Connected Account (Read Only)"
           defaultValue={this.props.accounts[0]}
           helperText="You can disconnect this account in Metamask. After disconnecting, please refresh this page."
           InputProps={{
             readOnly: true,
           }}
           style={{ marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '90vw'}}
         />
        </div>
      </div>
    )
  }
}

export default GeneralSection;
