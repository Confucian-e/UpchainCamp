// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public count;

    function add(uint x) public {
        count += x;
    }
}