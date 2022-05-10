const { USCD, USCT } = require("./libs/tronweb/smart_contract")
const { ratelimitDelay } = require("./libs/utils")

const ACCOUNT = "TM1zzNDZD2DPASbKcgdVoTYhfmYgtfwx9R"

async function application() {
    await USCT.balanceOf(ACCOUNT)
        .then(el=>console.log(el.toString()))
        .catch(err=>console.error(err))
    
    await ratelimitDelay()

    await USCD.balanceOf(ACCOUNT)
        .then(el=>console.log(el.toString()))
        .catch(err=>console.error(err))    
}

application()
