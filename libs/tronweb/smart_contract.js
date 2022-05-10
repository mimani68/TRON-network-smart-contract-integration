const { triggerContract } = require("./tronweb")

// https://tronscan.org/#/contract/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8/code
const USDC_ADDRESS = "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8"
const USCD = {
    name: () => triggerContract(USDC_ADDRESS, "name"),
    symbol: () => triggerContract(USDC_ADDRESS, "symbol"),
    implementation: () => triggerContract(USDC_ADDRESS, "implementation"),
    totalSupply: () => triggerContract(USDC_ADDRESS, "totalSupply"),
    allowance: () => triggerContract(USDC_ADDRESS, "allowance"),
    admin: () => triggerContract(USDC_ADDRESS, "admin"),
    balanceOf: (...param) => triggerContract(USDC_ADDRESS, "balanceOf", param[0]),
    currency: () => triggerContract(USDC_ADDRESS, "currency"),
    decimals: () => triggerContract(USDC_ADDRESS, "decimals"),
    owner: () => triggerContract(USDC_ADDRESS, "owner"),
    version: () => triggerContract(USDC_ADDRESS, "version")
}

// https://tronscan.org/#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
const USDT_ADDRESS = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
const USCT = {
    name: () => triggerContract(USDT_ADDRESS, "name"),
    symbol: () => triggerContract(USDT_ADDRESS, "symbol"),
    totalSupply: () => triggerContract(USDT_ADDRESS, "totalSupply"),
    allowance: () => triggerContract(USDT_ADDRESS, "allowance"),
    balanceOf: (...param) => triggerContract(USDT_ADDRESS, "balanceOf", param[0]),
    currency: () => triggerContract(USDT_ADDRESS, "currency"),
    decimals: () => triggerContract(USDT_ADDRESS, "decimals"),
    owner: () => triggerContract(USDT_ADDRESS, "owner"),
    version: () => triggerContract(USDT_ADDRESS, "version"),
    deprecated: () => triggerContract(USDT_ADDRESS, "deprecated"),
    maximumFee: () => triggerContract(USDT_ADDRESS, "maximumFee"),
    calcfee: () => triggerContract(USDT_ADDRESS, "calcfee"),
}

module.exports = { USCD, USCT }
