// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Subscription {
    address public owner;
    uint256 public subscriptionPrice;
    mapping(address => uint256) public subscriptions;

    event Subscribed(address indexed user, uint256 expiryDate);

    constructor(uint256 _subscriptionPrice) {
        owner = msg.sender;
        subscriptionPrice = _subscriptionPrice;
    }

    function subscribe() public payable {
        require(msg.value == subscriptionPrice, "Incorrect payment amount");
        subscriptions[msg.sender] = block.timestamp + 30 days;
        emit Subscribed(msg.sender, subscriptions[msg.sender]);
    }

    function checkSubscription(address user) public view returns (bool) {
        return subscriptions[user] > block.timestamp;
    }
}
