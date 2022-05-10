// https://developers.tron.network/reference/tronweb-object
const TronWeb = require('tronweb')


// tronWeb.trx.getAccount('TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
//     .then(el=>console.log(el))
//     .catch(err=>console.log(err))

// console.log(tronWeb.createAccount())

// console.log(tronWeb.address.toHex("TQooBX9o8iSSprLWW96YShBogx7Uwisuim"))

let tronWeb;

async function init(){
    if ( !tronWeb ) {
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider("https://api.trongrid.io");
        const solidityNode = new HttpProvider("https://api.trongrid.io");
        const eventServer = new HttpProvider("https://api.trongrid.io");
        // tronWeb.setHeader({"TRON-PRO-API-KEY": 'your api key'});
        
        /**
         * 
         * console.log(tronWeb.createAccount())
         * 
         */
        const privateKey = "67DFEE24F16B56F63E22DCA32EE18945FFBA5A6BEDF682CC87A5B1AAAEF56168";
        
        tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
    }
    // tronWeb.setAddress("TQooBX9o8iSSprLWW96YShBogx7Uwisuim");
    
    // tronWeb.isConnected()
    //     .then(el=>console.log(el))
    //     .catch(err=>console.log(err))
    return tronWeb
}

async function triggerContract(contractAddress, cb, ...args){
    let tronWeb = await init()
    let contract = await tronWeb.contract().at(contractAddress);
    if ( args.length > 0 ) {
        return await contract[cb](args[0]).call();    
    } else {
        return await contract[cb]().call();
    }
}

module.exports = { triggerContract }
