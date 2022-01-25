var KaushCoin = artifacts.require("./KaushCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(KaushCoin);
};
