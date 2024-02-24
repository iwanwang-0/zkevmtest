const Lock = require("../artifacts/contracts/Lock.sol/Lock.json");

async function withdraw_from_lock(taskArgs, hre) {
    console.log("start withdraw");
    const lock_address = taskArgs.lockaddr;
    const provider = hre.ethers.provider;
    let balance = await provider.getBalance(lock_address);
    console.log(`Lock balance: ${balance}`);
    const lock = await hre.ethers.getContractAt(Lock.abi, lock_address);
    const transaction = await lock.withdraw();
    balance = await provider.getBalance(lock_address);
    console.log(`Lock balance: ${balance}`);

    const block_time = await lock.getBlockTime();
    console.log(`current block time: ${block_time}`);

    balance = await provider.getBalance("0xf1B2E526a2C3c8b4D562e644B4075eff9112cd27");
    console.log(`Bridge contract balance: ${balance}`);
}

task("withdraw", "withdraw from lock contract")
.addParam("lockaddr", "The address of Lock contract")
    .setAction(withdraw_from_lock);