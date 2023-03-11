import { ethers } from "hardhat";

async function main() {
    const CounterFactory = await ethers.getContractFactory('Counter');
    const Counter = await CounterFactory.deploy();

    await Counter.deployed();
    console.log(`The contract has been deployed to address: ${Counter.address}`);
}

main();