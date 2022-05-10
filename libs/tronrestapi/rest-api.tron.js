const axios = require("axios").default;
const bs58 = require("bs58")

function interact(name, parameter, contractAddress, ownerAddress) {
  const options = {
    method: 'POST',
    url: 'https://api.trongrid.io/wallet/triggerconstantcontract',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    data: {
      owner_address: ownerAddress,
      contract_address: contractAddress,
      function_selector: name,
      parameter: parameter
    }
  };
  
  axios.request(options)
    .then(function (response) {
      if ( !response.data.constant_result && !response.data.result ) {
        let clearText = Buffer.from(response.data.result.message, "hex").toString()
        return Promise.reject(clearText)
      }
      if ( response.data.constant_result ) {
        let clearText = Buffer.from(response.data.constant_result[0], "hex").toString("utf8")
        console.log(clearText);
      }
      if ( response.data.result ) {
        // let clearText = Buffer.from(response.data.result.message, "hex").toString()
        console.log(response.data.result);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

let usdc = (fn, param) => interact(fn, param, '413487b63d30b5b2c87fb7ffa8bcfade38eaac1abe', '4128fb7be6c95a27217e0e0bff42ca50cd9461cc9f')

// usdc("symbol()", "")
usdc("balanceOf(address)", Buffer.from("THmNuRfMJBDvCmvRrarNwi7Z6X1giU5AFW", "utf8").toString("hex"))
// usdc("owner()", "")