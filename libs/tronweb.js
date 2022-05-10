// https://developers.tron.network/reference/tronweb-object
const TronWeb = require('tronweb')
const BN = require('bn.js')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
// tronWeb.setHeader({"TRON-PRO-API-KEY": 'your api key'});

// https://tronscan.org/#/contract/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8/code
const USDC_ADDRESS = "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8"
const ACCOUNT = "TM1zzNDZD2DPASbKcgdVoTYhfmYgtfwx9R"
const privateKey = "67DFEE24F16B56F63E22DCA32EE18945FFBA5A6BEDF682CC87A5B1AAAEF56168";

const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
// tronWeb.setAddress("TQooBX9o8iSSprLWW96YShBogx7Uwisuim");

// tronWeb.isConnected()
//     .then(el=>console.log(el))
//     .catch(err=>console.log(err))

// tronWeb.trx.getAccount('TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
//     .then(el=>console.log(el))
//     .catch(err=>console.log(err))

// 
// interact()
//     .then(el=>console.log(el))
//     .catch(err=>console.log(err))

// console.log(tronWeb.createAccount())

// console.log(tronWeb.address.toHex("TQooBX9o8iSSprLWW96YShBogx7Uwisuim"))

async function triggercontract(contractAddress, ...args){
    let contract = await tronWeb.contract().at(contractAddress);
    let res = await contract.name().call();
    // let res = await contract.symbol().call();
    // let res = await contract.totalSupply().call();
    // let res = await contract.admin().call()
    // const res = await contract.methods.balanceOf(args[0]).call().then(el=>el.toString());
    return res
}

const USCD = (param) => triggercontract(USDC_ADDRESS, param)

module.exports = { USDC_ADDRESS, USCD, ACCOUNT }




