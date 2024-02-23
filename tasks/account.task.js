async function print_accounts(taskArgs, hre) {
    const accounts = await hre.ethers.getSigners();
    const provider = hre.ethers.provider;

    // for (const account of accounts) {
    //     const balance = await provider.getBalance(account.address);
    //     console.log(account.address + "\t" + "balance: " + hre.ethers.formatEther(balance));
    // }

    const signer = await provider.getSigner();
    const balance = await provider.getBalance(signer.address);
    console.log(`signer's balance: ${balance}`);
    tx = {
        to: "0x7fc905C3Ce2a70aEB5a30C1401EAE56D5549011D",
        value: hre.ethers.parseEther('2', 'ether')
    };
    const transaction = await signer.sendTransaction(tx);

    console.log(taskArgs.message);
}

task("accounts", "print accounts")
    .addParam("message", "The message to print")
    .setAction(print_accounts);