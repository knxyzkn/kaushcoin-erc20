import React, { Component } from "react";
import { Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

class ConnectedAccount extends Component {
  render() {
    const StyledTextFieldAccount = styled(TextField)({
      '& input + fieldset': {
        borderColor: '#42a5f5',
        borderWidth: 2,
      }
    });

    return (
      <div>

        <h2>Connected Account</h2>

        <div>
          <StyledTextFieldAccount
           id="read-only-connected-account"
           label="Your Connected Account Address (Read Only)"
           defaultValue={this.props.accounts[0]}
           helperText="You can disconnect this account in Metamask. After disconnecting, please refresh this page."
           InputProps={{
             readOnly: true,
           }}
           style={{ marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '90vw'}}
         />
        </div>

        <div>
          <StyledTextFieldAccount
           id="read-only-connected-account-balance"
           label="Account Balance (Read Only)"
           defaultValue={(this.props.balance/Math.pow(10,18)).toLocaleString()}
           helperText="This is the current balance of KSH in this account."
           InputProps={{
             readOnly: true
           }}
           style={{ marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px', width: '30vw'}}
         />
        </div>

      </div>
    )
  }
}

export default ConnectedAccount;
