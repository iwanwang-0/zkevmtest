require("@nomicfoundation/hardhat-toolbox");
require("./tasks/account.task");
require("./tasks/locktest.task");
const fs = require('fs');

const accounts = {
  mnemonic: fs.readFileSync(".secret").toString().trim(),
  // path: "m/44'/60'/0'/0",
  // initialIndex: 0,
  // count: 20
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      accounts
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/f1c6cc745a4a48658bd7082d6425154c",
      // url: "https://mainnet.infura.io/v3/2553c523a4574c9180e1620f0cf04d3e",
      accounts,
      chainId: 1,
      // from:
      // gas: "auto",
      // gasPrice: "auto",
      // gasMultiplier: 1,
      // timeout: 20000
    },
    goerli: {
      url: "https://goerli.infura.io/v3/f1c6cc745a4a48658bd7082d6425154c",
      // url: "https://goerli.infura.io/v3/2553c523a4574c9180e1620f0cf04d3e",
      accounts,
      chainId: 5,
      // from:
      // gas: "auto",
      // gasPrice: "auto",
      // gasMultiplier: 1,
      // timeout: 20000
    },
    tusima: {
      url: "http://47.76.174.197:8545",
      accounts,
      chainId: 1001,
      // from:
      // gas: "auto",
      // gasPrice: "auto",
      // gasMultiplier: 1,
      // timeout: 20000
    }
  },
  solidity: "0.8.24",
};
