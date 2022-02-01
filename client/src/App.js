// Requires react 17.x and over for material-ui. Truffle Unbox React installs react 16.x.
import React, { Component } from "react";
import KaushCoin from "./contracts/KaushCoin.json";
import getWeb3 from "./getWeb3";
import { Typography, MenuItem, Button, TextField } from '@mui/material';
import GeneralSection from "./components/GeneralSection.js";
import ConnectedAccount from "./components/ConnectedAccount.js";
import NotWeb3 from "./components/NotWeb3.js";
import Bottom from "./components/Bottom.js";
import { styled } from '@mui/material/styles';


import "./App.css";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    owner: null,
    balance: null,
    name: null,
    symbol: null,
    decimals: null
   };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log("ACCOUNTS", accounts);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log("NETWORK ID", networkId);

      const deployedNetwork = KaushCoin.networks[networkId];
      console.log("DEPLOYED NETWORK", deployedNetwork);

      const instance = new web3.eth.Contract(
        KaushCoin.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log("INSTANCE", instance);

      // Get the owner of the contract.
      const owner = await instance.methods
      .owner()
      .call()
      .catch(error => { alert(`Owner error. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
      console.log("OWNER", owner);

      // Get the name of the Token
      const name = await instance.methods.name().call();
      console.log("NAME", name);

      // Get the symbol of the Token
      const symbol = await instance.methods.symbol().call();
      console.log("SYMBOL", symbol);

      // Get the total supply of the Token
      const totalSupply = await instance.methods.totalSupply().call();
      console.log("TOTAL SUPPLY", totalSupply/Math.pow(10,18));

      // Get the decimals count of the Token
      const decimals = await instance.methods.decimals().call();
      console.log("DECIMALS", decimals);

      // Get the balance of Token in connected account
      const balance = await instance.methods.balanceOf(accounts[0]).call();
      console.log("BALANCE", balance);


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3,
        accounts,
        contract: instance,
        contractAddress: deployedNetwork.address,
        owner: owner,
        name: name,
        symbol: symbol,
        totalSupply: totalSupply,
        decimals: decimals,
        balance: balance
      }, this.runExample);
      console.log(this.state);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    // const { accounts, contract } = this.state;
    //
    // // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });
    //
    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();
    //
    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  handleMintButtonClick = async (event) => {
    try{
      // const mintValue= 10*Math.pow(10, this.state.decimals);
      const mintValue = 10;
      console.log("MINT VALUE", mintValue);
      console.log("MINT CLICKED", event, this.state.owner);
      await this.state.contract.methods
      .mint(this.state.accounts[0], mintValue)
      .send({ from: this.state.accounts[0] })
      .catch((error) => { alert(`Mint transaction was NOT sent. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});

      const balance = await this.state.contract.methods
      .balanceOf(this.state.accounts[0])
      .call()
      .catch((error) => { alert(`Balance was NOT received. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
      console.log("BALANCE", balance);

      const totalSupply = await this.state.contract.methods
      .totalSupply()
      .call()
      .catch((error) => { alert(`Balance was NOT received. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
      console.log("TOTAL SUPPLY", totalSupply);

      this.setState({
        balance: balance,
        totalSupply: totalSupply
      });

    } catch(error) {
      console.log("ERROR MINT", error)
    }
  }

  // handleMintApproveButtonClick = async (event) => {
  //   try{
  //     console.log("MINT VIA APPROVE CLICKED", event, this.state.owner);
  //     await this.state.contract.methods
  //     .approve(this.state.accounts[0], 1000000000000000)
  //     .send({ from: this.state.accounts[0] });
  //     // .catch((error) => { alert(`Mint was NOT sent. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
  //   } catch(error) {
  //     console.log("ERROR MINT", error)
  //   }
  // }
  //
  // handleBalanceButtonClick = async (event) => {
  //   try{
  //     console.log("GET BALANCE CLICKED", event);
  //     const balance = await this.state.contract.methods
  //     .balanceOf(this.state.accounts[0])
  //     .call()
  //     .catch((error) => { alert(`Balance was NOT received. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
  //     console.log("BALANCE", balance);
  //     this.setState({ balance });
  //   } catch(error) {
  //     console.log("ERROR BALANCE", error)
  //   }
  // }

  // handleTotalSupplyButtonClick = async (event) => {
  //   try{
  //     console.log("GET TOTAL SUPPLY CLICKED", event);
  //     const totalSupply = await this.state.contract.methods
  //     .totalSupply()
  //     .call()
  //     .catch((error) => { alert(`Balance was NOT received. Please try again, perhaps after resetting your account. ${'\n'} Error: ${error.message}` )});
  //     console.log("TOTAL SUPPLY", totalSupply);
  //     this.setState({ totalSupply });
  //   } catch(error) {
  //     console.log("ERROR BALANCE", error)
  //   }
  // }

  render() {

    const StyledTextFieldAccount = styled(TextField)({
      '& input + fieldset': {
        borderColor: '#42a5f5',
        borderWidth: 2,
      }
    });

    if (!this.state.web3) {
      return <NotWeb3/>
    }
    return (
      <div className="App">
        <h1>Welcome to KaushCoin!</h1>
        <GeneralSection
          contractAddress={this.state.contractAddress}
          accounts={this.state.accounts}
          name={this.state.name}
          symbol={this.state.symbol}
          totalSupply={this.state.totalSupply}
          decimals={this.state.decimals}
        />

        <hr style={{margin: '3vw'}}/>

        <ConnectedAccount
          contractAddress={this.state.contractAddress}
          accounts={this.state.accounts}
          name={this.state.name}
          symbol={this.state.symbol}
          totalSupply={this.state.totalSupply}
          decimals={this.state.decimals}
          balance={this.state.balance}
        />

        <hr style={{margin: '3vw'}}/>

        <h2>Faucet</h2>

        <div>
          <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
            <div>
              The faucet will mint 10 KSH and send it to the connected account displayed above.
            </div>
            <div>
              Click 'Mint' to initiate a transaction.
            </div>
            <div>
              Once the transaction is complete, the connected account balance will be incremented by 10 KSH.
            </div>
          </Typography>

          <Button size="small" variant="contained" disableElevation
              onClick={this.handleMintButtonClick.bind(this)}
              style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}
          >MINT 10 KSH</Button>
        </div>

        <hr style={{margin: '3vw'}}/>

        <h2>KSH in MetaMask</h2>
        <Typography align="center" style={{marginLeft: '3vw', marginRight: '3vw', marginBottom: '20px'}}>
          Follow <a target="_blank" href="https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask">this MetaMask guide</a> to add KSH to MetaMask
        </Typography>

        <div style={{margin: '3vw'}}/>

        <Bottom/>
      </div>
    );
  }
}

export default App;
