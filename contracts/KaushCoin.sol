// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KaushCoin is ERC20, Ownable {
    constructor() ERC20("KaushCoin", "KSH") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount * 10 ** decimals());
    }

    function burn(address account, uint256 amount) public {
      _burn(account, amount * 10 ** decimals());
    }
}
