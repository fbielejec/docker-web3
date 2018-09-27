Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider("qa_parity:8545"));

if(!web3.isConnected()) {
  throw "Can't connect to Ethereum node";
}

console.log(web3.eth.blockNumber);
