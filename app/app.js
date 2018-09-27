Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider(process.env.URL_PARITY));

if(!web3.isConnected()) {
  var message = "Can't connect to Ethereum node: " + process.env.URL_PARITY;
  throw message;
}

console.log(web3.eth.blockNumber);
