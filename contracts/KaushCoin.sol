// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KaushCoin is ERC20, Ownable {
    constructor() ERC20("KaushCoin", "KSH") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

Original: 0x0E92F8e98453b94535d1C8D2697d98C65E11156b
To: 0xd111b7F2B18B894C885B328e298A5eBC2b914BFE

let kaushcoin;
KaushCoin.at("0x2B5F6651D420CA6738c36384E6eD2f4989621520").then(function(x) { kaushcoin = x });

kaushcoin.mint().then(function(x) { return x; });
