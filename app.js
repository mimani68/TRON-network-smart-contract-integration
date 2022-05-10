const { USCD, ACCOUNT } = require("./libs/tronweb")

USCD(ACCOUNT)
    .then(el=>console.log(el))
    .catch(err=>console.log(err))