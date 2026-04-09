// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct User {
        string username;
        address owner;
    }

    mapping(address => User) public users;

    function register(string memory _username) public {
        users[msg.sender] = User(_username, msg.sender);
    }

    function getUser(address _addr) public view returns (string memory) {
        return users[_addr].username;
    }
}
