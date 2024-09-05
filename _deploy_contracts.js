const Subscription = artifacts.require("Subscription");

module.exports = function (deployer) {
  deployer.deploy(Subscription, web3.utils.toWei("0.1", "ether"));
};
