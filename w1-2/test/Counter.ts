import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", () => {
    async function deployCounter() {
        const [owner, account] = await ethers.getSigners();
        const CounterFactory = await ethers.getContractFactory('Counter');
        const Counter = await CounterFactory.deploy();
    
        await Counter.deployed();

        return { Counter, owner, account }
    }

    describe("Deployment", () => {
        it("Owner can call successfully",async () => {
            const { Counter } = await loadFixture(deployCounter);
            await Counter.count();
            expect(await Counter.counter()).to.equal(1);
        });
        it("Other account cannot call",async () => {
            const { Counter, account } = await loadFixture(deployCounter);
            await expect(Counter.connect(account).count()).to.be.reverted;
        });
    });
});

